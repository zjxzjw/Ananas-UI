import AnModel from './index.vue'

AnModel.install = app => {
    app.component(AnModel.name, AnModel)
}

export default AnModel
