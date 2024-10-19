<script setup lang='ts'>
import { 
  useStore,
  useVueImportMap,
  Repl,
  File,
compileFile
} from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import { ref, toRefs, reactive } from 'vue'
import mainCode from './template/main.vue?raw'
import ananasUICode from './template/ananas-ui.js?raw'

const MAIN_FILE = 'src/PlaygroundMain.vue'
const APP_FILE = 'src/App.vue'
const ANANAS_UI = 'src/ananas-ui.js'

const initFiles = () => {
  const files: Record<string, File> = Object.create(null)
  const res = deserialize(window.location.search.slice(1))
  if(!files[ANANAS_UI]) {
    files[ANANAS_UI] = new File(ANANAS_UI, ananasUICode)
  }
  if(!files[MAIN_FILE]) {
    files[APP_FILE] = new File(APP_FILE, res)
  }
  return files
}

function deserialize(text: string) {
  const state = JSON.parse(decodeURIComponent(escape(atob(text))))
  return state
}

const importMap = useVueImportMap()

const builtinImportMap = ref({
  imports: {
    ...importMap.importMap.value.imports,
    'ananas-ui': 'https://gcore.jsdelivr.net/npm/ananas-ui@latest/dist/dist/ananas-ui.min.js'
  }
})

const storeState = toRefs(reactive({
    files: initFiles(),
    mainFile: MAIN_FILE,
    activeFilename: APP_FILE,
    builtinImportMap,
    template: {
      welcomeSFC: mainCode,
    },
}))

const previewOptions = reactive({
  headHTML: '<link rel="stylesheet" href="https://gcore.jsdelivr.net/npm/ananas-ui@latest/dist/dist/style.min.css" />'
})

const store = useStore(storeState)
store.files[MAIN_FILE].hidden = true
store.files[ANANAS_UI].hidden = true

watchEffect(() => {
  compileFile(store, store.activeFile).then((errs) => (store.errors = errs))
})

for (const [filename, file] of Object.entries(store.files)) {
  if (filename === store.activeFilename) continue
  compileFile(store, file).then((errs) => store.errors.push(...errs))
}

</script>

<template>
  <div class="playground">
    <Repl
      :editor="Monaco"
      :store="store"
      :clear-console="false"
      :preview-options="previewOptions"
    />
  </div>
</template>

<style>
.playground {
  height: 100vh;
}
</style>
