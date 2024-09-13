import AnEllipsis from './index.vue'

AnEllipsis.install = app => {
    app.component(AnEllipsis.name, AnEllipsis)
}

export default AnEllipsis
