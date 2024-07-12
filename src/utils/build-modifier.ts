import {StringBuilder} from "./string-builder.ts";

/*
 * possible modifiers
 * 80% 0.80 80 32
 *             ^^ this is not valid
 * value must either between 0-1 or between 0-100
 * with multiples of 5 or has % at the end.
 */

export const buildModifier = (modifier: string | undefined, opacityScale: any): string => {
    if (!modifier) return ""

    if(modifier[0] === "[" && modifier[modifier.length - 1] === "]") {
        modifier = modifier.slice(1, -1)
    }

    if(modifier[modifier.length - 1] === '%'){
        return StringBuilder.makeArbitrary(modifier)
    }

    for (let [key, value] of Object.entries(opacityScale)) {
        if (key == modifier || value == modifier) {
            return key
        }
    }

    if((Number(modifier) === 0 || Number(modifier) >= 1) && Number(modifier) <= 100) {
        return StringBuilder.makeArbitrary(modifier + "%")
    }

    if( Number(modifier) >= 0 && Number(modifier) <= 1) {
        // we have number between 0-1 but it's not in the scale just make it arbitrary.
        return StringBuilder.makeArbitrary(modifier)
    }

    return ""
}