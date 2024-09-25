import AnTabs from './index.vue'

AnTabs.install = app => {
  app.component(AnTabs.name, AnTabs)
}

export default AnTabs