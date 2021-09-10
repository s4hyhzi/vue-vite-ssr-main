import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), styleImport({
        libs: [{
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
                return `ant-design-vue/es/${name}/style/css`;
            },
        }]
    })]
})
