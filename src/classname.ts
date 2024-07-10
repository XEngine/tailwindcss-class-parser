import type {AST} from "./parse.ts";
import {functionalPlugins, getPluginsByNs, type Modifier, namedPlugins, type Variant} from "./plugins.ts";
import {inferDataType} from "./utils/infer-data-type.ts";
import {getTailwindTheme} from "./theme.ts";
import {isColor} from "./utils/is-color.ts";
import {decodeArbitraryValue} from "./utils/decodeArbitraryValue.ts";

export type AstDeclaration = {
    property: string
    value: string
    variants?: Variant[]
    modifiers?: Modifier[],
    important?: boolean
    negative?: boolean,
}

export const classname = (ast: AstDeclaration): string => {
    const theme = getTailwindTheme()
    const important = ast.important ? "!" : ""
    let variants = ast.variants?.length ? buildVariants(ast.variants) : []

    /**
    * output "sm:hover:lg:!" or "!" or ""
    */
    const prefix = `${variants}${important}`
    const [namedPluginClassName, namedPluginClassPlugin] = [...namedPlugins.entries()].find(([,plugin]) => plugin.value === ast.value) || []
    if(namedPluginClassName){
        return `${prefix}${namedPluginClassName}`
    }

   //color is special, we need to find if value is a color
    if(isColor(ast.value, theme)){
        console.log(decodeArbitraryValue(ast.value))
        return `${prefix}text-[${ast.value}]`
    }

    /*
    const [functionalPluginClassName, matchedFunctionalPlugins] = [...functionalPlugins.entries()].find(([,plugin]) => plugin.value === ast.value) || []
    if(key){
        return `${prefix}${key}`
    }*/

    return "dummy"
}

const buildVariants = (variants: Variant[]): string => {
    const variantOrder: Variant["type"][] = ["media", 'system', "interaction", "pseudo", "content", "form", "state", "misc"]
    const _sortedVariants = variants.sort((a, b) => variantOrder.indexOf(a.type) - variantOrder.indexOf(b.type))
    return _sortedVariants.length > 0 ? _sortedVariants.map(x => x.value).join(':') + ':' : ''
}