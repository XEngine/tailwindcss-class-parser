import {colord} from "colord";

export const CalculateHexFromString = (input: string): { hex: string, alpha: string | undefined } => {
    const color = colord(input)
    const alpha = color.alpha()

    return {
        hex: color.alpha(1).toHex(),
        alpha: alpha !== 1 ? alpha.toString() : undefined
    }
}