import AnTextarea from './index.vue'

AnTextarea.install = app => {
  app.component(AnTextarea.name, AnTextarea)
}

export default AnTextarea