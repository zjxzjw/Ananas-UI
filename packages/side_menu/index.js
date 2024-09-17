import AnSideMenu from './index.vue'

AnSideMenu.install = app => {
    app.component(AnSideMenu.name, AnSideMenu)
}

export default AnSideMenu
