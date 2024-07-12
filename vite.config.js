// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({ rollupTypes: true })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'TailwindcssClassParser',
            fileName: 'tailwindcss-class-parser',
        },
        rollupOptions: {
            external: (id) => /^tailwindcss($|\/)/.test(id),
            output: {
                globals: {
                    "tailwindcss": 'tailwindcss',
                },
            },
        },
    }
})