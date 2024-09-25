import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

      // global imports to register
      imports: [
        // vue auto import
        'vue',
        // vue-router auto import
        {
          'vue-router': [
            'useRouter',
            'createRouter',
            'createWebHistory',
            'createWebHashHistory'
          ]
        },
        {
          "pinia": [
            'createPinia',
            'defineStore'
          ]
        }
      ],
      dts: './auto-imports.d.ts',
      // Recommend to enable
      viteOptimizeDeps: true,

      // Inject the imports at the end of other imports
      injectAtEnd: true,
    }),
    Markdown({
      builders: []
    })
  ],
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@packages': path.resolve(__dirname, 'packages'),
    },
    // 忽略后缀
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 5173,
    host: true,
    open: true
  },
  build: {
    // 部署文档打包请注释
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    },
    lib:{
      entry: './packages/index.js',
      name: 'ananas-ui',
      fileName: 'ananas-ui'
    }
  }
})
