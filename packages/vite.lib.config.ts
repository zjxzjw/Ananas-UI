import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from 'unplugin-auto-import/vite';


// 常规打包 用于构建环境
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: 'dist/lib/stats.html',
    }),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

      // global imports to register
      imports: [
        // vue auto import
        'vue',
      ],
      dts: './auto-imports.d.ts',
      // Recommend to enable
      viteOptimizeDeps: true,

      // Inject the imports at the end of other imports
      injectAtEnd: true,
    }),
  ],
  build: {
    lib: {
      entry: './index.js',
      formats: ['cjs'],
    },
    outDir: 'dist/lib',
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