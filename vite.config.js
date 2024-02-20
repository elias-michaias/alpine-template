import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'
import copy from 'rollup-plugin-copy'


export default defineConfig({
    plugins: [
        copy({
            targets: [
              { src: 'src/pages/*.html', dest: 'dist/pages' },
              { src: 'src/components/*.html', dest: 'dist/components' },
              { src: 'src/blog/*.html', dest: 'dist/blog' }
            ],
            hook: 'writeBundle'
          }),
        AlpineVitePlugin()
    ],
    publicDir: 'public',
})
