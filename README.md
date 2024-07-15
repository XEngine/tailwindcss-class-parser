
# Tailwindcss Class Parser

Tailwindcss Parser is an open-source library for parsing Tailwind CSS classes into an Abstract Syntax Tree (AST) and AST to classname. This allows for easier manipulation and analysis of Tailwind CSS classes in a declarative manner. If you are into a WYSIWYG like CMS builders this library can parse classes from blocks (or whatever you are using as a name for your components) or convert class definitions into classnames into your blocks.

Inspired by the Tailwind CSS v4.0.0's ```candidate.ts``` parser.

------------

It is probably missing many Tailwind classes and might throw some exceptions. You can create a PR to add Tailwind class names to the `plugins.ts` file to support class names that I've missed.

## Installation

You can install the Tailwindcss Parser via npm:

```bash
npm install @xengine/tailwindcss-class-parser
```

## Usage

To use the Tailwindcss Parser, you need to import the `parse` function from the package and pass the Tailwind CSS class you want to parse. The function returns an AST representation of the class.

### Example

```javascript
import { parse } from '@xengine/tailwindcss-class-parser';

const ast = parse('lg:hover:text-red-500/70');

console.log(ast);
/*
Output:
{
    root: "text",
    property: "textColor",
    value: {
        value: "#ef4444",
        kind: "color",
        class: ["color"],
        raw: "red-500"
    },
    modifier: "70",
    variants: [
        {
            kind: "named",
            type: "interaction",
            value: "hover"
        },
        {
            kind: "named",
            type: "media",
            value: "lg"
        }
    ],
    important: false,
    negative: false
}
*/
```

## API

### `parse(className: string): object`

Parses a given Tailwind CSS class and returns an AST object.

#### Parameters

- `className` (string): The Tailwind CSS class to parse.

#### Returns

- `object`: The AST representation of the Tailwind CSS class.

### `className(ast: object): string`

Converts a given Tailwind CSS AST to the original class string.
#### Parameters

- `ast` (object): small Tailwind CSS declaration
```
  AstDeclaration = {
    property: string
    value: string
    variants?: Variant[]
    modifier?: string,
    important?: boolean
    negative?: boolean,
}
  ```
#### Returns

- `className` (string): The Tailwind CSS class.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

## Acknowledgements

Special thanks to the Tailwind CSS team for their amazing work on Tailwind CSS.

[@siddharthkp](https://github.com/siddharthkp) from https://github.com/ui-devtools/tailwind-utils
