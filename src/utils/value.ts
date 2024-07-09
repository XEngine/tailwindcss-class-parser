import type {DataType} from "./infer-data-type.ts";
import type {FunctionalPlugin} from "../plugins.ts";
import {UnmatchedValueException} from "../exceptions/unmatched-value-exception.ts";

export type Value = {
    kind: DataType,
    value: string,
    raw: string,
    class: string[]
}

export const getValue = (value: string, plugin: FunctionalPlugin, scale: any): Value => {
    if (plugin.type === "color") {
        let matchedColor = value.split('-').reduce((acc, val) => acc[val], scale);
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