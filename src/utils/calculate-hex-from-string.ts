import {colord} from "colord";

export const CalculateHexFromString = (input: string): { hex: string, alpha: string | undefined } | undefined => {
    const color = colord(input)
    const alpha = color.alpha()

    if(!color.isValid()){
        return undefined
    }

    return {
        hex: color.alpha(1).toHex(),
        alpha: alpha !== 1 ? alpha.toString() : undefined
    }
}