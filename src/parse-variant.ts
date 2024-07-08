import type {Variant} from "./utils/types.ts";
import {decodeArbitraryValue} from "./utils/decodeArbitraryValue.ts";
import {segment} from "./utils/segment.ts";
import {findRoot} from "./find-root.ts";
import {variants} from "./plugins.ts";

export function parseVariant(variant: string, screen?: string[]): Variant | null {
    // Arbitrary variants
    if (variant[0] === '[' && variant[variant.length - 1] === ']') {
        if (variant[1] === '@' && variant.includes('&')) return null
        let selector = decodeArbitraryValue(variant.slice(1, -1))
        if (selector[0] !== '@') {
            if (!selector.includes('&')) {
                selector = `&:is(${selector})`
            }
        }

        return {
            kind: 'arbitrary',
            root: selector,
        }
    }

    let [variantWithoutModifier, modifier = null, additionalModifier] = segment(variant, '/')
    if (additionalModifier) return null

    if(screen && screen.length > 0){
        for(let breakpoint of screen){
            variants.set(breakpoint, "media")
        }
    }

    let [root, value] = findRoot(variantWithoutModifier, variants)
    // Variant is invalid, therefore the candidate is invalid, and we can skip
    // continue parsing it.

    if (root === null) return null
    if (value !== null) return null

    return {
        kind: variants.get(root) || 'static',
        root,
    }
}