import type {Config} from "tailwindcss/types/config"
import resolveConfig from 'tailwindcss/resolveConfig';
import memoize from 'lodash/memoize'


// fuck you TS. I don't want to deal with this, this return a Theme instance but fuck the interface they've put into it.
// for now this ANY will do.
// @ts-ignore IT STUBS ANYWAY
export const getTailwindTheme = memoize((config: Config | undefined = {}) : any => {
    const parsedConfig = resolveConfig(config || {})
    return parsedConfig.theme
})