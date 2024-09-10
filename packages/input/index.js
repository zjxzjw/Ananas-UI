import AnInput from './index.vue'

AnInput.install = app => {
  app.component(AnInput.name, AnInput)
}

export default AnInput