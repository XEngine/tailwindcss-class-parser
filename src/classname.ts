import type {AST} from "./parse.ts";
import {functionalPlugins, getPluginsByNs, type Modifier, namedPlugins, type Variant} from "./plugins.ts";
import {inferDataType} from "./utils/infer-data-type.ts";
import {getTailwindTheme} from "./theme.ts";
import {isColor} from "./utils/is-color.ts";
import {decodeArbitraryValue} from "./utils/decodeArbitraryValue.ts";
import {segment} from "./utils/segment.ts";
import {PluginNotFoundException} from "./exceptions/plugin-not-found-exception.ts";
import {colord} from "colord";
import type {CustomThemeConfig} from "tailwindcss/types/config";
import {StringBuilder} from "./utils/string-builder.ts";

export type AstDeclaration = {
    property: string
    value: string
    variants?: Variant[]
    modifier?: string,
    important?: boolean
    negative?: boolean,
}

export const classname = (ast: AstDeclaration, config?: CustomThemeConfig): string => {
    const theme = getTailwindTheme(config)
    const stringBuilder = new StringBuilder()
    let negative = ast.negative || false
    stringBuilder.appendVariants(...ast.variants || [])

    if (ast.important) {
        stringBuilder.makeImportant()
    }

    if (ast.value[0] === "-") {
        ast.value = ast.value.slice(1)
        negative = true
    }

    const [namedPluginClassName, namedPluginClassPlugin] = [...namedPlugins.entries()].find(([, plugin]) => plugin.value === ast.value) || []
    if (namedPluginClassName) {
        return stringBuilder.addRoot(namedPluginClassName).toString()
    }

    const [root, possiblePlugins = []] = [...functionalPlugins.entries()].find(([root, plugins]) => plugins.some(o => o.ns === ast.property)) || []
    if (!root) {
        throw new PluginNotFoundException(ast.property)
    }

    stringBuilder.addRoot(root)
    //color is special, we need to find if value is a color
    if (isColor(ast.value, theme)) {
        const matchedPlugin = possiblePlugins.find((plugin) => plugin.type === "color")
        if (!matchedPlugin) {
            throw new PluginNotFoundException(ast.property)
        }

        let tailwindThemeColor = ast.value.split('-').reduce((acc, val) => acc[val], theme[matchedPlugin.scaleKey || "colors"] as any)
        if (tailwindThemeColor && typeof tailwindThemeColor !== "object") {
            //user entered a value like "red-500". we found equivalent tailwind theme color.
            //return TW class directly like "bg-red-500" with modifiers and variants
            return stringBuilder
                .appendModifier(buildModifier(ast.modifier, theme.opacity))
                .addValue(ast.value)
                .toString()
        }
        //at this point we know user entered a value like "#ff0000", or just "red" maybe rgba, hsla, etc.
        //try to get hex color and check if tailwind has it.
        const color = calculateHex(ast.value)
        return stringBuilder
            .appendModifier(buildModifier(color.alpha || ast.modifier, theme.opacity))
            .addValue(findTailwindColorByHex(color.hex, theme[matchedPlugin.scaleKey || "colors"]) || StringBuilder.makeArbitrary(color.hex))
            .toString()
    }

    const matchedPlugin = possiblePlugins.find((plugin) => plugin.ns === ast.property)
    if (!matchedPlugin) {
        throw new PluginNotFoundException(ast.property)
    }

    const possibleValue = findTailwindValueByUnit(ast.value, theme[matchedPlugin.scaleKey])
    if (possibleValue) {
        stringBuilder.addValue(possibleValue)

        //for making the class negative, we are making sure matched TW Plugin supports negative
        if (matchedPlugin.supportNegative && negative) {
            stringBuilder.makeNegative()
        }
    }

    return stringBuilder.toString()
}

const calculateHex = (input: string): { hex: string, alpha: string | undefined } => {
    const color = colord(input)
    const alpha = color.alpha()

    return {
        hex: color.alpha(1).toHex(),
        alpha: alpha !== 1 ? alpha.toString() : undefined
    }
}

const buildModifier = (modifier: string | undefined, opacityScale: any): string => {
    if (!modifier) return ""

    for (let [key, value] of Object.entries(opacityScale)) {
        if (key === modifier || value === modifier) {
            return key
        }
    }

    return StringBuilder.makeArbitrary(modifier)
}

const findTailwindColorByHex = (colorInput: string | undefined, colors: any) => {
    if (!colorInput) return false

    for (let [key, twColors] of Object.entries(colors)) {
        for (let [shade, hex] of Object.entries(twColors as [string, string])) {
            if (hex === colorInput) {
                return `${key}-${shade}`
            }
        }
    }

    return false
}

const findTailwindValueByUnit = (unit: string | undefined, scale: any) => {
    if (!unit) {
        return undefined
    }

    for (let [key, value] of Object.entries(scale)) {
        if (
            (Array.isArray(value) && (key === unit || value.includes(unit))) ||
            (key === unit || value === unit)
        ) {
            return key !== "DEFAULT" ? key : undefined
        }
    }

    //if unit is not found in tailwind scales, it's probably an arbitrary unit
    return StringBuilder.makeArbitrary(unit)
}