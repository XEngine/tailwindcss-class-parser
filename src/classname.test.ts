import {expect, test} from 'vitest'
import {type AstDeclaration, classname} from "./classname.ts";

const table = [
    [{property: "display", value: "flex"}, "flex"],
    [{property: "display", value: "flex", important: true}, "!flex"],
    [{property: "backgroundColor", value: "#ff0000"}, "bg-[#ff0000]"],
    [{property: "backgroundColor", value: "red-500"}, "bg-red-500"],
    [{property: "backgroundColor", value: "#ef4444"}, "bg-red-500"],
    [{property: "backgroundColor", value: "#ef44444d"}, "bg-red-500/30"],
    [{property: "backgroundColor", value: "rgba(239, 68, 68, 0.3)"}, "bg-red-500/30"],
    [{property: "backgroundColor", value: "hsla(0, 84%, 60.1%, 0.3)"}, "bg-red-500/30"],
    [{property: "fontSize", value: "1rem"}, "text-base"],
    [{property: "fontSize", value: "12px"}, "text-[12px]"],
    [{property: "margin", value: "12px"}, "m-[12px]"],
    [{property: "marginRight", value: "1rem"}, "mr-4"],
    [{property: "marginRight", value: "-1rem"}, "-mr-4"],
    [{property: "marginRight", value: "1rem", negative: true}, "-mr-4"],
]

//@ts-ignore
test.each(table)('should parse declaration into tailwindcss classes: "%s" -> "%s"', (input: any, expected: any) => {
    expect(classname(input)).toEqual(expected)
})
