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
import AnModel from './model/index.js'
import AnPagination from './pagination/index.js'
import AnDataTable from './data_table/index.js'
import AnDataTableColumn from './data_table/column/index.js'
import {AnNotification} from './notification/index.ts'
import AnTabs from './tabs/index.js'
import AnPane from './tabs/pane/index.js'
import AnLoading from './loading/index.ts'
import AnTooltip from './tooltip/index.ts'
import AnUpload from './upload/index.js'

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
    AnChart,
    AnModel,
    AnPagination,
    AnDataTable,
    AnTabs,
    AnPane,
    AnDataTableColumn,
    AnLoading,
    AnTooltip,
    AnUpload
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
    AnChart,
    AnModel,
    AnPagination,
    AnDataTable,
    AnNotification,
    AnTabs,
    AnMessage,
    AnPane,
    AnDataTableColumn,
    AnLoading,
    AnTooltip,
    AnUpload
}
export default AnanasUI
