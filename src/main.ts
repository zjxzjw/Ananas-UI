import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/index.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"

// @ts-expect-error
import AnAnAsUI from '../packages/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AnAnAsUI)
app.use(hljsVuePlugin)

app.mount('#app')
