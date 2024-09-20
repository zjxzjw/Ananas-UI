import AnButton from './button/index.js'
import AnInput from './input/index.js'
import AnRadio from './radio/index.js'
import AnTextarea from './textarea/index.js'
import AnSpace from './space/index.js'
import AnTree from './tree/index.js'
import AnTag from './tag/index.js'
import AnBreadcrumb from './breadcrumb/index.js'
import AnSelect from './select/index.js'
import AnMessage from './message/index.js'
import AnTable from './table/index.js'
import AnCard from './card/index.js'
import AnIcon from './icon/index.js'
import AnNumberAnimation from './number_animation/index.js'
import AnEllipsis from './ellipsis/index.js'
import AnSideMenu from './side_menu/index.js'
import AnImage from './image/index.js'
import AnCheckbox from './checkbox/index.js'
import AnChart from './chart/index.js'

const components = [
    AnButton,
    AnInput,
    AnTextarea,
    AnRadio,
    AnSpace,
    AnTree,
    AnTag,
    AnBreadcrumb,
    AnSelect,
    AnTable,
    AnCard,
    AnIcon,
    AnNumberAnimation,
    AnEllipsis,
    AnSideMenu,
    AnImage,
    AnCheckbox,
    AnChart
]

const install = app => {
    components.forEach(item => {
        app.use(item)
    })

    app.config.globalProperties.$message = AnMessage
}

const AnanasUI = {
    install
}

export {
    AnButton,
    AnInput,
    AnTextarea,
    AnRadio,
    AnSpace,
    AnTree,
    AnTag,
    AnBreadcrumb,
    AnSelect,
    AnTable,
    AnCard,
    AnIcon,
    AnNumberAnimation,
    AnEllipsis,
    AnSideMenu,
    AnImage,
    AnCheckbox,
    AnChart
}
export default AnanasUI
