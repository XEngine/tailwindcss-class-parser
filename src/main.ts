import resolveConfig from "tailwindcss/resolveConfig";
import type {Config} from "tailwindcss/types/config";
import {segment} from "./utils/segment.ts";
import {Variant} from "./utils/types.ts";

type toASTOptions = {
    config?: Config
}

export const toAST = (input: string, options: toASTOptions) => {
    //@ts-ignore
    const resolvedConfig = resolveConfig(options.config);
    const theme = resolveConfig.theme || {}

    let rawVariants = segment(input, ':')
    let base = rawVariants.pop()!

    let parsedCandidateVariants: Variant[] = []
    for (let i = rawVariants.length - 1; i >= 0; --i) {
        let parsedVariant = designSystem.parseVariant(rawVariants[i])
        if (parsedVariant === null) return null

        parsedCandidateVariants.push(parsedVariant)
    }

};
