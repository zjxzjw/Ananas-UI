import { App } from 'vue'
import Tooltip from './Tooltip.vue'

Tooltip.install = function (app: App) {
  app.component(Tooltip.name!, Tooltip)
}

const AnTooltip = Tooltip

export default AnTooltip