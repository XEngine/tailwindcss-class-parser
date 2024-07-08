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
    selector: string
    compounds: boolean
} | {
    kind: 'static'
    root: string
    compounds: boolean
}

    /**
     * Functional variants are variants that can take an argument. The argument is
     * either a named variant value or an arbitrary variant value.
     *
     * E.g.:
     *
     * - `aria-disabled`
     * - `aria-[disabled]`
     * - `@container-size`          -> @container, with named value `size`
     * - `@container-[inline-size]` -> @container, with arbitrary variant value `inline-size`
     * - `@container`               -> @container, with no value
     */
    | {
    kind: 'functional'
    root: string
    value: ArbitraryVariantValue | NamedVariantValue | null
    modifier: ArbitraryModifier | NamedModifier | null

    // If true, it can be applied as a child of a compound variant
    compounds: boolean
}

    /**
     * Compound variants are variants that take another variant as an argument.
     *
     * E.g.:
     *
     * - `has-[&_p]`
     * - `group-*`
     * - `peer-*`
     */
    | {
    kind: 'compound'
    root: string
    modifier: ArbitraryModifier | NamedModifier | null
    variant: Variant

    // If true, it can be applied as a child of a compound variant
    compounds: boolean
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