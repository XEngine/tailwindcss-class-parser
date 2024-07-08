import {decodeArbitraryValue} from "./utils/decodeArbitraryValue.ts";
import type {CandidateModifier} from "./utils/types.ts";

export function parseModifier(modifier: string): CandidateModifier  {
    if (modifier[0] === '[' && modifier[modifier.length - 1] === ']') {
        let arbitraryValue = modifier.slice(1, -1)

        // If an arbitrary value looks like a CSS variable, we automatically wrap
        // it with `var(...)`.
        //
        // But since some CSS properties accept a `<dashed-ident>` as a value
        // directly (e.g. `scroll-timeline-name`), we also store the original
        // value in case the utility matcher is interested in it without
        // `var(...)`.
        let dashedIdent: string | null = null
        if (arbitraryValue[0] === '-' && arbitraryValue[1] === '-') {
            dashedIdent = arbitraryValue
            arbitraryValue = `var(${arbitraryValue})`
        } else {
            arbitraryValue = decodeArbitraryValue(arbitraryValue)
        }

        return {
            kind: 'arbitrary',
            value: arbitraryValue,
            dashedIdent,
        }
    }

    return {
        kind: 'named',
        value: modifier,
    }
}