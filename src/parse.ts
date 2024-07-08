import type {Config, ThemeConfig} from "tailwindcss/types/config"
import resolveConfig from 'tailwindcss/resolveConfig';
import {segment} from "./utils/segment.ts";
import {arbitraryParser} from "./arbitrary-parser.ts";
import {createUtilities} from "./utilities.ts";
import {findRoot} from "./find-root.ts";
import type {Variant} from "./utils/types.ts";
//import {findNamedProperty, namedPlugins, plugins, possiblePlugins} from "./plugins.ts";

const staticProperties = new Map([
    ["backgroundImage", {prefix: 'bg', scale: 'backgroundImage'}],
    ["backgroundPosition", {prefix: 'bg', scale: 'backgroundPosition'}],
    ["backgroundSize", {prefix: 'bg', scale: 'backgroundSize'}],
    ["backgroundRepeat", {prefix: 'bg', scale: 'backgroundRepeat'}],
])

export type State = {
    important: boolean
    negative: boolean
}

export type NamedModifier = {
    kind: 'named'
    value: string
}
export type ArbitraryModifier = {
    kind: 'arbitrary'
    value: string
    dashedIdent: string | null
}

export type Output = {
    kind: string
    property: string
    value: string
    modifier: ArbitraryModifier | NamedModifier | null
    important: boolean
    negative: boolean
}

export const parse = (input: string, config?: Config) => {
    const parsedConfig = resolveConfig(config || {} as Config)
    const theme = parsedConfig.theme
    console.log(theme)

    let state: State = {
        important: false,
        negative: false
    }
    const variants = segment(input, ':')
    let base = variants.pop()!

    /*let parsedCandidateVariants: Variant[] = []

    for (let i = variants.length - 1; i >= 0; --i) {
        let parsedVariant = parseVariant(variants[i])
        if (parsedVariant === null) return null

        parsedCandidateVariants.push(parsedVariant)
    }*/

    //check if we have a negativeness
    if (base[0] === '!') {
        state.important = true
        base = base.slice(1)
    }

    if (base[0] === '-') {
        state.negative = true
        base = base.slice(1)
    }

    if (base[0] === '[') {
        return arbitraryParser(base, state)
    }

    const utilities = createUtilities(theme)
    let [root, value] = findRoot(base, utilities)
    if (root === null) return null

    const utility = utilities.get(root)

    if(!utility) return null

    if (utility.kind === 'static') {
        if (value !== null) return null
        return {
            ...utility.declarations,
            kind: utility.kind,
            root,
            //variants: parsedCandidateVariants,
            negative: state.negative,
            important: state.important,
        }
    }

    return {
        ...utility.declarations,
        kind: utility.kind,
        root,
        //variants: parsedCandidateVariants,
        value: utility.handleFn(value),
        negative: state.negative,
        important: state.important,
    }
}

console.log(parse("bg-red-500"))