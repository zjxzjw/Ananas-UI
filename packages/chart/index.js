import AnChart from './index.vue'

AnChart.install = app => {
    app.component(AnChart.name, AnChart)
}

export default AnChart
