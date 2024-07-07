export type NamedUtilityValue = {
    kind: 'named'
    value: string
    fraction: string | null
}
type ArbitraryModifier = {
    kind: 'arbitrary'
    value: string
    dashedIdent: string | null
}


type NamedModifier = {
    kind: 'named'
    value: string
}

export type CandidateModifier = ArbitraryModifier | NamedModifier

type ArbitraryVariantValue = {
    kind: 'arbitrary'
    value: string
}

type NamedVariantValue = {
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