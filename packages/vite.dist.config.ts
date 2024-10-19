import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from 'unplugin-auto-import/vite';


// 全量打包 用于stript标签直接引入，cdn场景，沙箱环境
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: 'dist/dist/stats.html',
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
      name: 'ananas-ui',
      formats: ['umd', 'es'],
    },
    outDir: 'dist/dist',
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