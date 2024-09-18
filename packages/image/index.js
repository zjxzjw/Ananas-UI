import AnImage from './index.vue'

AnImage.install = app => {
    app.component(AnImage.name, AnImage)
}

export default AnImage
