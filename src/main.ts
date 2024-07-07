import resolveConfig from "tailwindcss/resolveConfig";
import type { Config } from "tailwindcss/types/config";

export const toAST = (config?: Config) => {
    //@ts-ignore
    const resolvedConfig = resolveConfig(config);
    const theme = resolveConfig.theme || {}
};
