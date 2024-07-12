export const findTailwindColorFromHex = (colorInput: string | undefined, colors: any) => {
    if (!colorInput) return false

    for (let [key, twColors] of Object.entries(colors)) {
        for (let [shade, hex] of Object.entries(twColors as [string, string])) {
            if (hex === colorInput) {
                return `${key}-${shade}`
            }
        }
    }

    return false
}