import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";

// 全量打包 用于stript标签直接引入，cdn场景，沙箱环境
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: 'dist/umd/stats.html',
    })
  ],
  build: {
    lib: {
      entry: './index.js',
      name: 'ananas-ui',
      formats: ['umd'],
    },
    outDir: 'dist/umd',
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        },
        // 只生成命名导出
        exports:'named'
      }
    },
  },
})