import { defineConfig } from 'vite'
import { resolve } from "path";
import AlpineVitePlugin from './alpine-vite-plugin.js'

export default defineConfig({
    plugins: [
        AlpineVitePlugin()
    ],
    publicDir: 'public/',
})
