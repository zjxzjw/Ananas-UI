import AnSpace from './index.vue'

AnSpace.install = app =>  {
  app.component(AnSpace.name, AnSpace)
}

export default AnSpace