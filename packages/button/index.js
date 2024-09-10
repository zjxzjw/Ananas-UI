import AnButton from './index.vue'

AnButton.install = app => {
    app.component(AnButton.name, AnButton)
}

export default AnButton