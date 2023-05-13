import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/main.ts'],
            refresh: true,
        }),

        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false
                }
            }
        }),

        Components({
            dts: './resources/js/components.d.ts',
            dirs: [ './app-inertia' ],
            deep: true,
            directoryAsNamespace: true,
        }),

        AutoImport({
            imports: ['vue'],
            dts: './resources/js/auto-imports.d.ts'
        }),
    ],
});
