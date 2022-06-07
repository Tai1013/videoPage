import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// pug
import pugPlugin from "vite-plugin-pug"
const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),pugPlugin(options, locals)],
  base: '/videoPage/',
  build: {
    outDir: 'docs', // 構建輸出路徑
    assetsDir: 'assets', //靜態資原始檔夾，和outDir同級
    assetsInlineLimit: 4096, // kb, 小於此值將內聯base64格式
  },
})
