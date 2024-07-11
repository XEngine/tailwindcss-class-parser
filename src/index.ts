import {parse} from "./parse.ts";
import {classname} from "./classname.ts";

export {parse, classname}

console.log(
    classname({property: "marginRight", value: "-1rem"})
)