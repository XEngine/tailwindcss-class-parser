import {functionalPlugins, namedPlugins, type Variant} from "./plugins";
import {getTailwindTheme} from "./theme";
import {isColor} from "./utils/is-color";
import {PluginNotFoundException} from "./exceptions/plugin-not-found-exception";
import type {Config} from "tailwindcss/types/config";
import {StringBuilder} from "./utils/string-builder";
import {CalculateHexFromString} from "./utils/calculate-hex-from-string";
import {findTailwindColorFromHex} from "./utils/find-tailwind-color-from-hex";
import {buildModifier} from "./utils/build-modifier";
import get from "lodash/get";

export type AstDeclaration = {
    property: string
    value: string
    variants?: Variant[]
    modifier?: string,
    important?: boolean
    negative?: boolean,
}

export const classname = (ast: AstDeclaration, config?: Config): string | undefined => {
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

    const [namedPluginClassName] = [...namedPlugins.entries()]
        .filter(([, plugin]) => plugin.ns === ast.property)
        .find(([, plugin]) => plugin.value === ast.value)
    || []

    if (namedPluginClassName) {
        return stringBuilder.addRoot(namedPluginClassName).toString()
    }

    const [root, possiblePlugins = []] = [...functionalPlugins.entries()].find(([, plugins]) => plugins.some(o => o.ns === ast.property)) || []
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

        let tailwindThemeColor = get(theme[matchedPlugin.scaleKey || "colors"] as any, ast.value.split('-').join('.'))
        if (tailwindThemeColor && typeof tailwindThemeColor !== "object") {
            //user entered a value like "red-500". we found equivalent tailwind theme color.
            //return TW class directly like "bg-red-500" with modifiers and variants
            return stringBuilder
                .appendModifier(buildModifier(ast.modifier, theme.opacity))
                .addValue(ast.value)
                .toString()
        }
        //at this point we know user entered a value like "#ff0000", or rgba, hsla, etc.
        //try to get hex color and check if tailwind has it.
        const color = CalculateHexFromString(ast.value)
        if(!color) {
            return undefined
        }
        return stringBuilder
            .appendModifier(buildModifier(color.alpha || ast.modifier, theme.opacity))
            .addValue(
                findTailwindColorFromHex(color.hex, theme[matchedPlugin.scaleKey || "colors"])
                || StringBuilder.makeArbitrary(color.hex)
            )
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