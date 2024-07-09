import type {CustomThemeConfig} from "tailwindcss/types/config"
import resolveConfig from 'tailwindcss/resolveConfig';
import {segment} from "./utils/segment";
import {arbitraryParser} from "./arbitrary-parser";
import {findRoot} from "./find-root";
import type {Variant} from "./utils/types";
import {functionalPlugins, namedPlugins} from "./plugins";
import {determineUnitType} from "./utils/unit-type";
import {parseVariant} from "./parse-variant";
import {inferDataType} from "./utils/infer-data-type.ts";

export type State = {
    important: boolean
    negative: boolean
}

export const parse = (input: string, config?: CustomThemeConfig) => {
    //@ts-ignore
    const parsedConfig = resolveConfig(config || {})
    const theme = parsedConfig.theme

    let state: State = {
        important: false,
        negative: false
    }
    const variants = segment(input, ':')
    let base = variants.pop()!

    let parsedCandidateVariants: Variant[] = []

    for (let i = variants.length - 1; i >= 0; --i) {
        let parsedVariant = parseVariant(variants[i], Object.keys(theme!["screens"] || {}))
        if (parsedVariant === null) return null
        parsedCandidateVariants.push(parsedVariant)
    }

    if (base[0] === '!') {
        state.important = true
        base = base.slice(1)
    }

    if (base[0] === '-') {
        state.negative = true
        base = base.slice(1)
    }

    if (base[0] === '[') {
        return arbitraryParser(base, state)
    }

    const namedPlugin = namedPlugins.get(base)
    if(namedPlugin){
        return {
            root: base,
            kind: "static",
            property: namedPlugin!.ns,
            value: {
                class: namedPlugin.class,
                raw: base,
                value: namedPlugin.value,
            },
            modifier: [],
            important: state.important,
            negative: state.negative
        }
    }

    let valueDeclaration = {}
    let [root, value] = findRoot(base, functionalPlugins)

    if (!root) {
        throw new Error(`Could not determine root from ${base}. Either you spelled it wrong or it's not in the lookup table`)
    }
    //@ts-ignore
    let unitType = determineUnitType(theme, value)
    const plugins = functionalPlugins.get(root)
    if (plugins && value && value[0] === '[' && value[value.length - 1] === ']') {
        //arbitrary
        let arbitraryValue = value.slice(1, -1)
        unitType = inferDataType(arbitraryValue, [...plugins.values()].map(({type}) => type))
        const associatedPluginByType = plugins!.find(plugin => plugin.type === unitType)
        return {
            root: root,
            property: associatedPluginByType!.ns,
            value: {
                value: arbitraryValue,
                class: associatedPluginByType!.class,
                raw: value,
                type: unitType
            },
            modifier: [],
            arbitrary: true,
            important: state.important,
            negative: state.negative
        }
    }

    const associatedPluginByType = plugins!.find(plugin => plugin.type === unitType)

    if (!associatedPluginByType) {
        throw new Error(`Could not find plugin by matching ${unitType}. Either you spelled it wrong or it's not a functional plugin`)
    }

    const scale = theme![associatedPluginByType.ns]

    if (value) {
        if (unitType === "color") {
            const [color, shade] = segment(value, '-')
            valueDeclaration = scale[color][shade]
                ? {
                    value: scale[color][shade],
                    class: associatedPluginByType!.class,
                    raw: value,
                    type: 'color',
                }
                : {}
        } else  {
            valueDeclaration = {
                value: scale[value],
                class: associatedPluginByType!.class,
                raw: value,
                type: unitType
            }
        }
    }

    return {
        root: root,
        property: associatedPluginByType.ns,
        value: valueDeclaration,
        modifier: parsedCandidateVariants,
        important: state.important,
        negative: state.negative
    }
}

console.log(parse("w-1/2"))