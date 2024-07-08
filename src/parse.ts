import type {Config, CustomThemeConfig, ThemeConfig} from "tailwindcss/types/config"
import resolveConfig from 'tailwindcss/resolveConfig';
import {segment} from "./utils/segment.ts";
import {arbitraryParser} from "./arbitrary-parser.ts";
import {findRoot} from "./find-root.ts";
import type {Variant} from "./utils/types.ts";
import {functionalPlugins, variants} from "./plugins";
import {determineUnitType} from "./utils/unit-type";
import {parseVariant} from "./parse-variant";

export type State = {
    important: boolean
    negative: boolean
}

export type NamedModifier = {
    kind: 'named'
    value: string
}
export type ArbitraryModifier = {
    kind: 'arbitrary'
    value: string
    dashedIdent: string | null
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

    //check if we have a negativeness
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

    let valueDeclaration = {}
    let [root, value] = findRoot(base, functionalPlugins)
    if (!root) {
        throw new Error("Could not determine root")
    }
    //@ts-ignore
    const unitType = determineUnitType(theme, value)
    const plugins = functionalPlugins.get(root)
    const associatedPluginByType = plugins!.find(plugin => plugin.type === unitType)

    if (!associatedPluginByType) {
        throw new Error("Could not find plugin")
    }

    const scale = theme![associatedPluginByType.ns]

    if (value) {
        if (unitType === "color") {
            const [color, shade] = segment(value, '-')
            valueDeclaration = scale[color][shade]
                ? {
                    value: scale[color][shade],
                    raw: value,
                    type: 'color',
                }
                : {}
        } else  {
            valueDeclaration = {
                value: scale[value],
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

console.log(parse("bg-opacity-50"))