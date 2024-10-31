import AnUpload from './index.vue'

AnUpload.install = app => {
  app.component(AnUpload.name, AnUpload)
}

export default AnUpload