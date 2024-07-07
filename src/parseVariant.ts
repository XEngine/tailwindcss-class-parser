import {Variant} from "./utils/types.ts";
import {segment} from "./utils/segment.ts";
import {decodeArbitraryValue} from "./utils/decodeArbitraryValue.ts";

export function parseVariant(variant: string): Variant | null {
    // Arbitrary variants
    if (variant[0] === '[' && variant[variant.length - 1] === ']') {
        let selector = decodeArbitraryValue(variant.slice(1, -1))

        if (selector[0] !== '@') {
            if (!selector.includes('&')) {
                selector = `&:is(${selector})`
            }
        }

        return {
            kind: 'arbitrary',
            selector,
            compounds: true,
        }
    }

    let [variantWithoutModifier, modifier = null, additionalModifier] = segment(variant, '/')

    // If there's more than one modifier, the variant is invalid.
    //
    // E.g.:
    //
    // - `group-hover/foo/bar`
    if (additionalModifier) return null

    let [root, value] = findRoot(variantWithoutModifier, designSystem.variants)

    // Variant is invalid, therefore the candidate is invalid and we can skip
    // continue parsing it.
    if (root === null) return null

    switch (designSystem.variants.kind(root)) {
        case 'static': {
            if (value !== null) return null

            return {
                kind: 'static',
                root,
                compounds: designSystem.variants.compounds(root),
            }
        }

        case 'functional': {
            if (value === null) return null

            if (value[0] === '[' && value[value.length - 1] === ']') {
                return {
                    kind: 'functional',
                    root,
                    modifier: modifier === null ? null : parseModifier(modifier),
                    value: {
                        kind: 'arbitrary',
                        value: decodeArbitraryValue(value.slice(1, -1)),
                    },
                    compounds: designSystem.variants.compounds(root),
                }
            }

            return {
                kind: 'functional',
                root,
                modifier: modifier === null ? null : parseModifier(modifier),
                value: {kind: 'named', value},
                compounds: designSystem.variants.compounds(root),
            }
        }

        case 'compound': {
            if (value === null) return null

            let subVariant = designSystem.parseVariant(value)
            if (subVariant === null) return null
            if (subVariant.compounds === false) return null

            return {
                kind: 'compound',
                root,
                modifier: modifier === null ? null : {kind: 'named', value: modifier},
                variant: subVariant,
                compounds: designSystem.variants.compounds(root),
            }
        }
    }

    return null
}

function findRoot(
    input: string,
    lookup: { has: (input: string) => boolean },
): [string | null, string | null] {
    // If the lookup has an exact match, then that's the root.
    if (lookup.has(input)) return [input, null]

    // Otherwise test every permutation of the input by iteratively removing
    // everything after the last dash.
    let idx = input.lastIndexOf('-')
    if (idx === -1) {
        // Variants starting with `@` are special because they don't need a `-`
        // after the `@` (E.g.: `@-lg` should be written as `@lg`).
        if (input[0] === '@' && lookup.has('@')) {
            return ['@', input.slice(1)]
        }

        return [null, null]
    }

    // Determine the root and value by testing permutations of the incoming input
    // against the lookup table.
    //
    // In case of a candidate like `bg-red-500`, this looks like:
    //
    // `bg-red-500` -> No match
    // `bg-red`     -> No match
    // `bg`         -> Match
    do {
        let maybeRoot = input.slice(0, idx)

        if (lookup.has(maybeRoot)) {
            return [maybeRoot, input.slice(idx + 1)]
        }

        idx = input.lastIndexOf('-', idx - 1)
    } while (idx > 0)

    return [null, null]
}