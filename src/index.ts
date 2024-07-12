import {parse} from "./parse.ts";
import {classname} from "./classname.ts";

export {parse, classname}

console.log(parse("bg-red-500/[70]"))
console.log(classname({property: "backgroundColor", value: "red-500", modifier: "70"}))