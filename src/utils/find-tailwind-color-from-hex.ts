import {colord} from "colord";

export const findTailwindColorFromHex = (colorInput: string | undefined, colors: any) => {
    if (!colorInput) return false

    //#fff, #000 or long white and black hexes safe words
    for (let [key, twColors] of Object.entries(colors)) {
        if((twColors === "#fff" || twColors === "#000") && colord(colorInput).isEqual(twColors)) {
            return key
        }else {
            for (let [shade, hex] of Object.entries(twColors as [string, string])) {
                if (hex === colorInput) {
                    return `${key}-${shade}`
                }
            }
        }
    }

    return false
}