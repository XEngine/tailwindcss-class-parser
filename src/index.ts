import {parse} from "./parse.ts";
import {classname} from "./classname.ts";

console.log(parse("sm:!flex"))
console.log(parse("lg:hover:bg-red-500/50"))


console.log(classname({
    property: "display",
    value: "flex",
    variants: [
        {
            "kind": "named",
            "type": "interaction",
            "value": "hover"
        },
        {
            "kind": "named",
            "type": "media",
            "value": "sm"
        }
    ],
}))
console.log(classname({
    property: "flexGrow",
    value: "0",
    variants: [
        {
            "kind": "named",
            "type": "interaction",
            "value": "hover"
        },
        {
            "kind": "named",
            "type": "media",
            "value": "sm"
        }
    ],
}))

console.log(classname({
    property: "backgroundColor",
    value: "#ff0000",
}))

export {parse, classname}