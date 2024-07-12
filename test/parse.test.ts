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