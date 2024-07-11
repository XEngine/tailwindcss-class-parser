import type {CustomThemeConfig} from "tailwindcss/types/config"
import resolveConfig from 'tailwindcss/resolveConfig';
import memoize from 'lodash/memoize'

export const getTailwindTheme = memoize((config?: CustomThemeConfig) : CustomThemeConfig => {
    //@ts-ignore -> tailwind stubs this if provided config is undefined
    const parsedConfig = resolveConfig(config || {})
    return parsedConfig.theme as CustomThemeConfig
})