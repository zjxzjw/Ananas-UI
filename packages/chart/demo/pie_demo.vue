<template>
    <an-chart
        :chart-data="barChartData"
        chart-type="pie"
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
      ]
    };
  }
};
</script>
