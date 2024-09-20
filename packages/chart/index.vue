<template>
  <div ref="chart" :style="{ width: '100%', height: chartHeight }"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'AnChart',
  props: {
    // 图表数据
    chartData: {
      type: Array,
      required: true
    },
    // 图表类型（例如：'bar', 'line', 'pie' 等）
    chartType: {
      type: String,
      default: 'bar'
    },
    // 图表高度
    chartHeight: {
      type: String,
      default: '300px'
    },
    // 自定义选项
    customOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chartInstance: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chart);
      this.setOptions();
      window.addEventListener('resize', this.handleResize);
    },
    setOptions() {
      // 检查 chartData 是否存在且不为空
      if (!this.chartData || this.chartData.length === 0) {
        console.error('chartData is empty or not provided');
        return;
      }

      const baseOptions = {
        title: this.customOptions.title,
        tooltip: this.customOptions.tooltip || {},
        series: [{
          name: this.customOptions.seriesName,
          type: this.chartType,
          data: this.chartData.map(item => ({
            name: item.name,
            value: item.value
          })),
          ...this.customOptions.seriesName
        }]
      };

      // 对于非饼图，添加 x 轴和 y 轴
      if (this.chartType !== 'pie') {
        baseOptions.xAxis = this.customOptions.xAxis || { data: this.chartData.map(item => item.name) };
        baseOptions.yAxis = this.customOptions.yAxis || {};
      }

      // 合并用户自定义选项
      const options = { ...baseOptions, ...this.customOptions };
      this.chartInstance.setOption(options);

      // 添加动画效果
      this.chartInstance.setOption({
        animation: true
      });
    },
    handleResize() {
      this.chartInstance.resize();
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.setOptions();
      }
    },
    customOptions: {
      deep: true,
      handler() {
        this.setOptions();
      }
    }
  }
};
</script>
