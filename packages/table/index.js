import AnTable from './index.vue'

AnTable.install = app => {
  app.component(AnTable.name, AnTable)
}

export default AnTable