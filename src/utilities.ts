import type {Candidate, CandidateModifier, NamedUtilityValue} from "./utils/types.ts";
import type {ThemeConfig} from "tailwindcss/types/config";
import {decl} from "./ast.ts";

export type Rule = {
    kind: 'rule'
    selector: string
    nodes: AstNode[]
}

export type Declaration = {
    kind: 'declaration'
    property: string
    value: string
    important: boolean
}

export type Comment = {
    kind: 'comment'
    value: string
}

export type AstNode = Rule | Declaration | Comment

type UtilityDescription = {
    supportsNegative?: boolean
    supportsFractions?: boolean
    scale?: string[]
    defaultValue?: string | null
    handleBareValue?: (value: NamedUtilityValue) => string | null
}

type CompileFn<T extends Candidate['kind']> = (
    value: Extract<Candidate, { kind: T }>,
) => AstNode[] | undefined

const ARBITRARY_VARIANT = Symbol('ARBITRARY_VARIANT')

export class Utilities {
    private utilities = new Map<
        string | symbol,
        {
            kind: Candidate['kind']
            declarations?: Declaration
        }
    >()

    static(name: string, declarations: Declaration) {
        this.set(name, {declarations, kind: 'static'})
    }

    functional(name: string, declarations: Declaration) {
        this.set(name, {kind: 'functional', declarations })
    }

    /*arbitrary(compileFn: CompileFn<'arbitrary'>) {
        this.set(ARBITRARY_VARIANT, {kind: 'arbitrary', compileFn: compileFn})
    }*/

    has(name: string) {
        return this.utilities.has(name)
    }

    get(name: string | symbol) {
        return this.utilities.get(name)
    }

    kind(name: string) {
        return this.utilities.get(name)!.kind
    }

    declaration(name: string) {
        return this.utilities.get(name)!.declarations
    }

    keys() {
        return this.utilities.keys()
    }

    entries() {
        return this.utilities.entries()
    }

    private set<T extends Candidate['kind']>(
        name: string | symbol,
        {kind, declarations}: { kind: T; declarations: Declaration },
    ) {
        this.utilities.set(name, {
            kind,
            declarations: declarations,
        })
    }
}


export function createUtilities(theme: any) {
    let utilities = new Utilities()

    function staticUtility(className: string, declarations: ([string, string])) {
        utilities.static(className, decl(declarations[0], declarations[1]))
    }

    function functionalUtility(classRoot: string, declarations: ([string, string, UtilityDescription?])) {
        const scales = theme[declarations[1]]
        const opts = declarations[2] || {}

        utilities.functional(classRoot, {
            handleFn: (value: string) => {

            }
        })
    }


    /**
     * @css `pointer-events`
     */
    staticUtility('pointer-events-none', ['pointer-events', 'none'])
    staticUtility('pointer-events-auto', ['pointer-events', 'auto'])

    functionalUtility('inset', ['inset', 'inset', {supportsNegative: true}])
    functionalUtility("bg", ["background-color", "backgroundColor"])
    return utilities
}