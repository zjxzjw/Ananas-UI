const n=`<template>
    <an-chart
        :chart-data="barChartData"
        chart-type="line"
        :custom-options="barChartOptions"
    />
</template>

<script>
export default {
  data() {
    return {
      barChartData: [
        { name: 'Mon', value: 120 },
        { name: 'Tue', value: 200 },
        { name: 'Wed', value: 150 },
        { name: 'Thu', value: 80 },
        { name: 'Fri', value: 70 },
        { name: 'Sat', value: 110 },
        { name: 'Sun', value: 130 }
      ],
      barChartOptions: {
        seriesName: {
          itemStyle: {
            color: '#ffcf3f'
          },
          emphasis: {
            itemStyle: {
              color: '#ffcf3f'
            }
          },
          barWidth: 40,
        }
      }
    };
  }
};
<\/script>
`;export{n as default};
