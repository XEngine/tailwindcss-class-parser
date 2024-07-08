export type NamedUtilityValue = {
    kind: 'named'
    value: string
    fraction: string | null
}

export type ArbitraryUtilityValue = {
    kind: 'arbitrary'

    /**
     * bg-[color:--my-color]
     *     ^^^^^
     */
    dataType: string | null

    /**
     * bg-[#0088cc]
     *     ^^^^^^^
     * bg-[--my_variable]
     * var(^^^^^^^^^^^^^)
     */
    value: string

    /**
     * bg-[--my_variable]
     *     ^^^^^^^^^^^^^
     */
    dashedIdent: string | null
}

export type ArbitraryModifier = {
    kind: 'arbitrary'
    value: string
    dashedIdent: string | null
}


export type NamedModifier = {
    kind: 'named'
    value: string
}

export type CandidateModifier = ArbitraryModifier | NamedModifier

export type ArbitraryVariantValue = {
    kind: 'arbitrary'
    value: string
}

export type NamedVariantValue = {
    kind: 'named'
    value: string
}
export type Variant =
    | {
    kind: 'arbitrary'
    root: string
} | {
    kind: 'static'
    root: string
} | {
    kind: 'media'
    root: string
}


export type Candidate =
/**
 * Arbitrary candidates are candidates that register utilities on the fly with
 * a property and a value.
 *
 * E.g.:
 *
 * - `[color:red]`
 * - `[color:red]/50`
 * - `[color:red]/50!`
 */
    | {
    kind: 'arbitrary'
    property: string
    value: string
    modifier: ArbitraryModifier | NamedModifier | null
    variants: Variant[]
    important: boolean
}

    /**
     * Static candidates are candidates that don't take any arguments.
     *
     * E.g.:
     *
     * - `underline`
     * - `flex`
     */
    | {
    kind: 'static'
    root: string
    variants: Variant[]
    negative: boolean
    important: boolean
}

    /**
     * Functional candidates are candidates that can take an argument.
     *
     * E.g.:
     *
     * - `bg-red-500`
     * - `bg-[#0088cc]`
     * - `w-1/2`
     */
    | {
    kind: 'functional'
    root: string
    value: ArbitraryUtilityValue | NamedUtilityValue | null
    modifier: ArbitraryModifier | NamedModifier | null
    variants: Variant[]
    negative: boolean
    important: boolean
}