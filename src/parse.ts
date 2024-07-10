import {segment} from "./utils/segment";
import {findRoot} from "./find-root";
import {functionalPlugins, type Modifier, namedPlugins, type Variant} from "./plugins";
import {parseVariant} from "./parse-variant";
import {inferDataType} from "./utils/infer-data-type.ts";
import {getValue, type Value} from "./utils/value.ts";
import {PluginNotFoundException} from "./exceptions/plugin-not-found-exception.ts";
import {decodeArbitraryValue} from "./utils/decodeArbitraryValue.ts";
import type {CustomThemeConfig, ScreensConfig} from "tailwindcss/types/config";
import {getTailwindTheme} from "./theme.ts";
import {isColor} from "./utils/is-color.ts";

export type State = {
    important: boolean
    negative: boolean
}

export type AST = {
    root: string
    kind: "named" | "functional"
    property: string
    value: Value
    variants: Variant[]
    modifiers: Modifier[],
    important: boolean
    negative: boolean,
    arbitrary: boolean
}

export const parse = (input: string, config?: CustomThemeConfig): AST => {
    const theme = getTailwindTheme(config)
    let state: State = {
        important: false,
        negative: false
    }
    const variants = segment(input, ':')
    let base = variants.pop()!

    let parsedCandidateVariants: Variant[] = []

    for (let i = variants.length - 1; i >= 0; --i) {
        let parsedVariant = parseVariant(variants[i], theme.screens as ScreensConfig)
        if (parsedVariant !== null)
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

    const namedPlugin = namedPlugins.get(base)
    if (namedPlugin) {
        return {
            root: base,
            kind: "named",
            property: namedPlugin!.ns,
            value: {
                class: namedPlugin.class,
                raw: base,
                kind: "named",
                value: namedPlugin.value,
            },
            variants: parsedCandidateVariants,
            modifiers: [],
            important: state.important,
            negative: state.negative,
            arbitrary: false
        }
    }

    let [root, value] = findRoot(base, functionalPlugins)

    if (!root) {
        throw new PluginNotFoundException(base)
    }

    const availablePlugins = functionalPlugins.get(root)
    if (!availablePlugins) {
        throw new PluginNotFoundException(base)
    }

    if (value && value[0] === '[' && value[value.length - 1] === ']') {
        let arbitraryValue = value.slice(1, -1)
        const unitType = inferDataType(arbitraryValue, [...availablePlugins.values()].map(({type}) => type))
        const associatedPluginByType = availablePlugins!.find(plugin => plugin.type === unitType)

        return {
            root: root,
            kind: "functional",
            property: associatedPluginByType!.ns,
            value: {
                value: arbitraryValue,
                class: associatedPluginByType!.class,
                raw: value,
                kind: unitType || "named"
            },
            variants: parsedCandidateVariants,
            modifiers: [],
            arbitrary: true,
            important: state.important,
            negative: state.negative
        }
    }

    //@ts-ignore
    let isValueColor = isColor(value, theme)

    //we need to remove modifier from value
    const modifiers: Modifier[] = []
    if (value && isValueColor) {
        let [valueWithoutModifier, modifierSegment = null] = segment(value, '/')
        value = valueWithoutModifier
        if (modifierSegment) {
            if (modifierSegment[0] === '[' && modifierSegment[modifierSegment.length - 1] === ']') {
                modifiers.push({
                    kind: 'arbitrary',
                    value: decodeArbitraryValue(modifierSegment.slice(1, -1)),
                })
            } else {
                modifiers.push({
                    kind: 'named',
                    value: modifierSegment,
                })
            }
        }
    }

    if (!value) {
        value = 'DEFAULT'
    }
    //check value against each scale of available plugins
    let matchedPlugin = availablePlugins.find(({scaleKey}) => value.split('-')[0] in theme[scaleKey])
    if (!matchedPlugin) {
        throw new PluginNotFoundException(base)
    }

    return {
        root: root,
        kind: "functional",
        property: matchedPlugin.ns,
        value: getValue(value, matchedPlugin, theme[matchedPlugin.scaleKey]),
        variants: parsedCandidateVariants,
        modifiers: modifiers,
        important: state.important,
        negative: state.negative,
        arbitrary: false,
    }
}