import type {Variant} from "../plugins.ts";

export class StringBuilder {
    private _classRoot: string = ""
    private _classValue: string = ""
    private _modifier: string = ""
    private _variants: Variant[] = []
    private important: boolean = false
    private negative: boolean = false

    public addRoot(str: string) {
        this._classRoot = str
        return this
    }

    public addValue(str: string) {
        this._classValue = str
        return this
    }

    public appendModifier(modifier: string) {
        if (modifier) {
            this._modifier = "/" + modifier
        }
        return this
    }

    public appendVariants(...variants: Variant[]) {
        for (const variant of variants) {
            this._variants.push(variant)
        }
        return this
    }

    public makeImportant() {
        this.important = true
        return this
    }

    public makeNegative() {
        this.negative = true
        return this
    }

    public toString() {
        const variantOrder: Variant["type"][] = ["media", 'system', "interaction", "pseudo", "content", "form", "state", "misc"]
        const _sortedVariants = this._variants.sort((a, b) => variantOrder.indexOf(a.type) - variantOrder.indexOf(b.type))

        return (_sortedVariants.length > 0 ? _sortedVariants.map(x => x.value).join(':') + ':' : '') +
            (this.important ? "!" : "") +
            (this.negative ? "-" : "") +
            this._classRoot +
            (this._classValue ? "-" + this._classValue : "") +
            this._modifier

    }

    static makeArbitrary(input: string) {
        return "[" + input + "]"
    }
}