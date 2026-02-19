import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    resolve: {
        alias: {
            'lucide': 'lucide/dist/esm/lucide/src/lucide.js'
        }
    },
    optimizeDeps: {
        include: ['lucide']
    },
    plugins: [
        tailwindcss(),
    ],
    base: '/',
})
