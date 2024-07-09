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
    if (value in theme.spacing || value in theme.width) {
        return 'length'
    }
    if(value in theme.opacity){
        return 'number'
    }

    return null
}