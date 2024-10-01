import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";


// 常规打包 用于构建环境
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: 'dist/es/stats.html',
    }),
  ],
  build: {
    lib: {
      entry: './index.js',
      formats: ['es'],
    },
    outDir: 'dist/es',
    rollupOptions:{
      external:[
        'vue',
        "@floating-ui/core",
        "@floating-ui/dom",
        "@fontsource/fira-mono",
        "echarts",
        "echarts-gl"
      ]
    },
  }
})