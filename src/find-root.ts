export function findRoot(
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