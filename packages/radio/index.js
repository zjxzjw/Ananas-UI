import AnRadio from './index.vue'

AnRadio.install = app => {
  app.component(AnRadio.name, AnRadio)
}

export default AnRadio