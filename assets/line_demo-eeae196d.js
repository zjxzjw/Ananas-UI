const r=`<template>\r
  <div class="chart-box">\r
    <an-chart\r
        :chart-data="barChartData"\r
        chart-type="line"\r
        :custom-options="barChartOptions"\r
    />\r
  </div>\r
</template>\r
\r
<script>\r
export default {\r
  data() {\r
    return {\r
      barChartData: [\r
        { name: 'Mon', value: 120 },\r
        { name: 'Tue', value: 200 },\r
        { name: 'Wed', value: 150 },\r
        { name: 'Thu', value: 80 },\r
        { name: 'Fri', value: 70 },\r
        { name: 'Sat', value: 110 },\r
        { name: 'Sun', value: 130 }\r
      ],\r
      barChartOptions: {\r
        seriesName: {\r
          itemStyle: {\r
            color: '#ffcf3f'\r
          },\r
          emphasis: {\r
            itemStyle: {\r
              color: '#ffcf3f'\r
            }\r
          },\r
          barWidth: 40,\r
        }\r
      }\r
    };\r
  }\r
};\r
<\/script>\r
\r
<style scoped>\r
.chart-box{\r
  width: 100%;\r
  display: flex;\r
  justify-content: center;\r
}\r
</style>\r
`;export{r as default};
