import AnTree from './index.vue'

AnTree.install = app => {
  app.component(AnTree.name, AnTree)
}

export default AnTree