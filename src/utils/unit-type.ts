import {segment} from "./segment";
import type {CustomThemeConfig} from "tailwindcss/types/config";
import type {DataType} from "./infer-data-type.ts";


export const determineUnitType = (theme: CustomThemeConfig, input: string): DataType | null => {
    const [value,] = segment(input, '-')
    if (value in theme.colors ||
        value === "inherit" ||
        value === "current" ||
        value === "transparent" ||
        value === "black" ||
        value === "white"
    ) {
        return 'color'
    }

    // TODO: Make more performant check
    const possibleLengths = new Set([
            ...Object.keys(theme.width),
            ...Object.keys(theme.height),
            ...Object.keys(theme.maxWidth),
            ...Object.keys(theme.maxHeight),
            ...Object.keys(theme.minWidth),
            ...Object.keys(theme.minHeight),
            ...Object.keys(theme.padding),
            ...Object.keys(theme.margin),
        ]
    )
    if (value in theme.spacing || possibleLengths.has(value)) {
        return 'length'
    }
    if (value in theme.opacity) {
        return 'number'
    }
    if(value in theme.backgroundPosition){
        return 'position'
    }

    return null
}