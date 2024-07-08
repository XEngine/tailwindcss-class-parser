declare module 'tailwindcss/resolveConfig' {
    import type { Config } from 'tailwindcss';

    declare function resolveConfig(config: Config): Config;
    export = resolveConfig;
}