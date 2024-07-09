# Tailwindcss Class Parser

Tailwindcss Parser is an open-source library for parsing Tailwind CSS classes into an Abstract Syntax Tree (AST). This allows for easier manipulation and analysis of Tailwind CSS classes in a declarative manner.

Heavily inspired by the Tailwind CSS v4.0.0's ```candidate.ts``` parser, this library does almost same thing but tweaked and simplified to support Tailwind CSS versions ^3.

------------

It is probably missing many Tailwind classes and might throw some exceptions. You can create a PR to add Tailwind class names to the `plugins.ts` file to support class names that I've missed.

## Installation

You can install the Tailwindcss Parser via npm:

```bash
npm install tailwindcss-class-parser
```

## Usage

To use the Tailwindcss Parser, you need to import the `parse` function from the package and pass the Tailwind CSS class you want to parse. The function returns an AST representation of the class.

### Example

```javascript
import { parse } from 'tailwindcss-class-parser';

const ast = parse('lg:hover:text-red-500');

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
    modifier: [
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
- TODO

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

## Acknowledgements

Special thanks to the Tailwind CSS team for their amazing work on Tailwind CSS.
