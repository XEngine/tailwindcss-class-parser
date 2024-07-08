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

export function decl(property: string, value: string): Declaration {
    return {
        kind: 'declaration',
        property,
        value,
        important: false,
    }
}