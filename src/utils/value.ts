import type {DataType} from "./infer-data-type";
import type {FunctionalPlugin} from "../plugins";
import {UnmatchedValueException} from "../exceptions/unmatched-value-exception";
import get from "lodash/get";

export type Value = {
    kind: DataType,
    value: string,
    raw: string,
    class: string[]
}

export const getValue = (value: string, plugin: FunctionalPlugin, scale: any): Value => {
    if (plugin.type === "color") {
        let matchedColor = get(scale, value.split('-').join('.'))
        if (!matchedColor) {
            throw new UnmatchedValueException(plugin.ns, value)
        }
        if (typeof matchedColor === 'object' && matchedColor.DEFAULT) {
            {
                matchedColor = matchedColor.DEFAULT
            }
        }
        return {
            value: matchedColor,
            kind: plugin.type,
            class: plugin.class,
            raw: value,
        }
    }

    const matchedValue = scale[value]
    if (!matchedValue) {
        throw new UnmatchedValueException(plugin.ns, value)
    }

    return {
        value: matchedValue,
        class: plugin.class,
        raw: value,
        kind: plugin.type
    }
}