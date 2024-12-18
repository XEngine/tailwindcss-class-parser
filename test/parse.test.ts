import {expect, it} from 'vitest'
import {parse} from "../src";

it('should parse a functional class', () => {
    expect(parse("bg-red-500")).toEqual(
        {
            "root": "bg",
            "kind": "functional",
            "property": "backgroundColor",
            "value": "#ef4444",
            "valueDef": {
                "value": "#ef4444",
                "kind": "color",
                "class": [
                    "background-color"
                ],
                "raw": "red-500"
            },
            "variants": [],
            "modifier": null,
            "important": false,
            "negative": false,
            "arbitrary": false
        }
    )
})

it("should parse a named/static class", () => {
    expect(parse("flex")).toEqual(
        {
            "root": "flex",
            "kind": "named",
            "property": "display",
            "value": "flex",
            "valueDef": {
                "class": [
                    "display"
                ],
                "raw": "flex",
                "kind": "named",
                "value": "flex"
            },
            "variants": [],
            "modifier": null,
            "important": false,
            "negative": false,
            "arbitrary": false
        }
    )
})
it("should parse a functional class with arbitrary modifier", () => {
    expect(parse("bg-gray-50/[50%]")).toEqual(
        {
            "root": "bg",
            "kind": "functional",
            "property": "backgroundColor",
            "value": "#f9fafb",
            "valueDef": {
                "value": "#f9fafb",
                "kind": "color",
                "class": [
                    "background-color"
                ],
                "raw": "gray-50"
            },
            "variants": [],
            "modifier": "[50%]",
            "important": false,
            "negative": false,
            "arbitrary": false
        }
    )
})
it("should parse a functional class with modifier", () => {
    expect(parse("bg-gray-50/20")).toEqual(
        {
            "root": "bg",
            "kind": "functional",
            "property": "backgroundColor",
            "value": "#f9fafb",
            "valueDef": {
                "value": "#f9fafb",
                "kind": "color",
                "class": [
                    "background-color"
                ],
                "raw": "gray-50"
            },
            "variants": [],
            "modifier": "20",
            "important": false,
            "negative": false,
            "arbitrary": false
        }
    )
})
it("should parse a functional class with variants", () => {
    expect(parse("lg:hover:text-red-500")).toEqual(
        {
            "root": "text",
            "kind": "functional",
            "property": "textColor",
            "value": "#ef4444",
            "valueDef": {
                "value": "#ef4444",
                "kind": "color",
                "class": [
                    "color"
                ],
                "raw": "red-500"
            },
            "variants": [
                {
                    "kind": "named",
                    "type": "interaction",
                    "value": "hover"
                },
                {
                    "kind": "named",
                    "type": "media",
                    "value": "lg"
                }
            ],
            "modifier": null,
            "important": false,
            "negative": false,
            "arbitrary": false
        }
    )
})
it("w-1/2", () => {
    expect(parse("w-1/2")).toEqual(
        {
            "root": "w",
            "kind": "functional",
            "property": "width",
            "value": "50%",
            "valueDef": {
                "value": "50%",
                "class": [
                    "width"
                ],
                "raw": "1/2",
                "kind": "length"
            },
            "variants": [],
            "modifier": null,
            "important": false,
            "negative": false,
            "arbitrary": false
        }
    )
})
it("should parse rounded corner classes", () => {
    expect(parse("rounded-tl-lg")).toEqual({
        arbitrary: false,
        important: false,
        kind: "functional",
        modifier: null,
        negative: false,
        property: "borderTopLeftRadius",
        root: "rounded-tl",
        value: "0.5rem",
        valueDef: {
            class: ["border-top-left-radius"],
            kind: "length",
            raw: "lg",
            value: "0.5rem",
        },
        variants: [],
    });
    expect(parse("rounded-tr-lg")).toEqual({
        arbitrary: false,
        important: false,
        kind: "functional",
        modifier: null,
        negative: false,
        property: "borderTopRightRadius",
        root: "rounded-tr",
        value: "0.5rem",
        valueDef: {
            class: ["border-top-right-radius"],
            kind: "length",
            raw: "lg",
            value: "0.5rem",
        },
        variants: [],
    });
    expect(parse("rounded-bl-lg")).toEqual({
        arbitrary: false,
        important: false,
        kind: "functional",
        modifier: null,
        negative: false,
        property: "borderBottomLeftRadius",
        root: "rounded-bl",
        value: "0.5rem",
        valueDef: {
            class: ["border-bottom-left-radius"],
            kind: "length",
            raw: "lg",
            value: "0.5rem",
        },
        variants: [],
    });
    expect(parse("rounded-br-lg")).toEqual({
        arbitrary: false,
        important: false,
        kind: "functional",
        modifier: null,
        negative: false,
        property: "borderBottomRightRadius",
        root: "rounded-br",
        value: "0.5rem",
        valueDef: {
            class: ["border-bottom-right-radius"],
            kind: "length",
            raw: "lg",
            value: "0.5rem",
        },
        variants: [],
    });
});
it('should parse flex-basis classes', () => {
    expect(parse('basis-full')).toEqual({
        "arbitrary": false,
        "important": false,
        "kind": "named",
        "modifier": null,
        "negative": false,
        "property": "flexBasis",
        "root": "basis-full",
        "value": "100%",
        "valueDef":  {
        "class": [
            "flex-basis",
        ],
        "kind": "named",
        "raw": "basis-full",
        "value": "100%",
        },
        "variants":  [],
    })
    expect(parse('basis-auto')).toEqual({
        "arbitrary": false,
        "important": false,
        "kind": "named",
        "modifier": null,
        "negative": false,
        "property": "flexBasis",
        "root": "basis-auto",
        "value": "auto",
        "valueDef":  {
        "class": [
            "flex-basis",
        ],
        "kind": "named",
        "raw": "basis-auto",
        "value": "auto",
        },
        "variants":  [],
    })
    expect(parse('basis-7')).toEqual({
        "arbitrary": false,
        "important": false,
        "kind": "functional",
        "modifier": null,
        "negative": false,
        "property": "flexBasis",
        "root": "basis",
        "value": "1.75rem",
        "valueDef":  {
        "class": [
            "flex-basis",
        ],
        "kind": "length",
        "raw": "7",
        "value": "1.75rem",
        },
        "variants":  [],
    })
})
it('should parse inset classes', () => {
    expect(parse('inset-2')).toEqual({
        "arbitrary": false,
        "important": false,
        "kind": "functional",
        "modifier": null,
        "negative": false,
        "property": "inset",
        "root": "inset",
        "value": "0.5rem",
        "valueDef": {
        "class": [
            "inset",
        ],
        "kind": "length",
        "raw": "2",
        "value": "0.5rem",
        },
        "variants": [],
    })
    expect(parse('inset-y-2')).toEqual({
        "arbitrary": false,
        "important": false,
        "kind": "functional",
        "modifier": null,
        "negative": false,
        "property": "insetY",
        "root": "inset-y",
        "value": "0.5rem",
        "valueDef": {
          "class": [
            "top",
            "bottom",
          ],
          "kind": "length",
          "raw": "2",
          "value": "0.5rem",
        },
        "variants": [],
    })
    expect(parse('inset-x-2')).toEqual({
        "arbitrary": false,
        "important": false,
        "kind": "functional",
        "modifier": null,
        "negative": false,
        "property": "insetX",
        "root": "inset-x",
        "value": "0.5rem",
        "valueDef": {
          "class": [
            "left",
            "right",
          ],
          "kind": "length",
          "raw": "2",
          "value": "0.5rem",
        },
        "variants": [],
    })
})
