import AnUI from 'ananas-ui'
import { getCurrentInstance } from 'vue'

let installed = false

export function setupAnanasUI() {
  if (installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(AnUI)
  installed = true
}