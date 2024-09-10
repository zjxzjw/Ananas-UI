import AnTag from "./index.vue"

AnTag.install = app =>  {
  app.component(AnTag.name, AnTag)
}

export default AnTag