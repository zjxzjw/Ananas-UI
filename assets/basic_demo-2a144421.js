const a=`<template>\r
  <AnDataTable :data="tableData" :bordered="true" :showHeader="true" align="center">\r
    <AnDataTableColumn label="日期" prop="date" width="10"></AnDataTableColumn>\r
    <AnDataTableColumn label="姓名" prop="name" width="10"></AnDataTableColumn>\r
    <AnDataTableColumn label="地址" prop="address" width="360"></AnDataTableColumn>\r
    <AnDataTableColumn label="操作" width="80">\r
      <template #default="scope">\r
        <an-button type="primary" size="mini">查看</an-button>\r
        <an-button type="primary" size="mini">编辑</an-button>\r
      </template>\r
    </AnDataTableColumn>\r
  </AnDataTable>\r
</template>\r
\r
<script setup>\r
import {ref} from 'vue';\r
\r
const tableData = ref([\r
  {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
  {date: '2016-05-04', name: '张小刚', address: '上海市普陀区金沙江路 1517 弄'},\r
])\r
<\/script>\r
`;export{a as default};
