import {segment} from "./segment.ts";
import type {CustomThemeConfig} from "tailwindcss/types/config";

export type UnitType = 'text' | 'image' | 'color' | 'coordinate' | 'unit' | 'raw' | 'length' | 'number'

export const determineUnitType = (theme: CustomThemeConfig, input: string): UnitType => {
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
    if (value in theme.spacing) {
        return 'length'
    }
    if(value in theme.opacity){
        return 'number'
    }

    return "raw"
}