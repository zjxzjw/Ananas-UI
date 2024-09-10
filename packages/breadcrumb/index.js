import AnBreadcrumb from './index.vue'

AnBreadcrumb.install = app => {
  app.component(AnBreadcrumb.name, AnBreadcrumb)
}

export default AnBreadcrumb