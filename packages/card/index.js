import AnCard from './index.vue'

AnCard.install = app => {
    app.component(AnCard.name, AnCard)
}

export default AnCard
