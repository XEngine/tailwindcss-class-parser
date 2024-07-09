import {segment} from "./utils/segment";
import {decodeArbitraryValue} from "./utils/decodeArbitraryValue";
import {parseModifier} from "./parse-variant.ts";
import type {State} from "./parse";

const DASH = 0x2d
const LOWER_A = 0x61
const LOWER_Z = 0x7a
export const arbitraryParser = (base: string, state: State) => {
    let [baseWithoutModifier, modifierSegment = null] = segment(base, '/')
    if (baseWithoutModifier[baseWithoutModifier.length - 1] !== ']') return null

    let charCode = baseWithoutModifier.charCodeAt(1)
    if (charCode !== DASH && !(charCode >= LOWER_A && charCode <= LOWER_Z)) {
        return null
    }

    baseWithoutModifier = baseWithoutModifier.slice(1, -1)
    let idx = baseWithoutModifier.indexOf(':')
    if (idx === -1 || idx === 0 || idx === baseWithoutModifier.length - 1) return null

    let property = baseWithoutModifier.slice(0, idx)
    let value = decodeArbitraryValue(baseWithoutModifier.slice(idx + 1))

    return {
        kind: 'arbitrary',
        property,
        value,
        modifier: modifierSegment === null ? null : parseModifier(modifierSegment),
        important: state.important,
    }
}