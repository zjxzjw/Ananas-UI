import AnPane from './index.vue'

AnPane.install = app => {
  app.component(AnPane.name, AnPane)
}

export default AnPane