import {decodeArbitraryValue} from "./utils/decodeArbitraryValue";
import {type Variant, variants} from "./plugins";
import type {ScreensConfig} from "tailwindcss/types/config";

export function parseVariant(variant: string, screens: ScreensConfig): Variant  {
    if (variant[0] === '[' && variant[variant.length - 1] === ']') {
        let arbitraryValue = variant.slice(1, -1)

        if (arbitraryValue[0] === '-' && arbitraryValue[1] === '-') {
            arbitraryValue = `var(${arbitraryValue})`
        } else {
            arbitraryValue = decodeArbitraryValue(arbitraryValue)
        }

        return {
            kind: 'arbitrary',
            type: 'misc',
            value: arbitraryValue,
        }
    }

    if(Object.keys(screens).includes(variant)) {
        return {
            kind: 'named',
            type: 'media',
            value: variant
        }
    }

    const matchedVariantType = variants.get(variant)
    return {
        kind: 'named',
        type: matchedVariantType || 'misc',
        value: variant,
    }
}