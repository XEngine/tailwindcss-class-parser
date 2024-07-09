import {expect, it} from 'vitest'
import {parse} from "./parse.ts";

it('should parse a functional class', () => {
    expect(parse("bg-red-500")).toEqual(
        {
            "root": "bg",
            "property": "backgroundColor",
            "value": {
                "value": "#ef4444",
                "kind": "color",
                "class": ["background-color"],
                "raw": "red-500"
            },
            "modifier": [],
            "important": false,
            "negative": false
        }
    )
})

it("should parse a named/static class", () => {
    expect(parse("flex")).toEqual({
        "root": "flex",
        "kind": "static",
        "property": "display",
        "value": {
            "class": ["display"],
            "raw": "flex",
            "value": "flex"
        },
        "modifier": [],
        "important": false,
        "negative": false
    })
})
it("should parse a functional class with arbitrary modifier", () => {
    expect(parse("bg-gray-50/[50%]")).toEqual({
        "root": "bg",
        "property": "backgroundColor",
        "value": {
            "value": "#f9fafb",
            "kind": "color",
            "class": [
                "background-color"
            ],
            "raw": "gray-50"
        },
        "modifier": [
            {
                "kind": "arbitrary",
                "type": "opacity",
                "value": "50%"
            }
        ],
        "important": false,
        "negative": false
    })
})
it("should parse a functional class with variants", () => {
    expect(parse("lg:hover:text-red-500")).toEqual({
        "root": "text",
        "property": "textColor",
        "value": {
            "value": "#ef4444",
            "kind": "color",
            "class": [
                "color"
            ],
            "raw": "red-500"
        },
        "modifier": [
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
        "important": false,
        "negative": false
    })
})