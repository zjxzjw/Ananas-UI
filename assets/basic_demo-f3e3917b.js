const n=`<template>\r
  <an-data-table\r
      :data="tableData"\r
      :headers="headers"\r
      :column-widths="columnWidths"\r
      :row-height="50"\r
      :show-page-size-selector="true"\r
      :show-total-count="true"\r
      :is-zebra="true"\r
      :fixed-header="true"\r
  >\r
  <template #actions-cell="slotProps">\r
    <an-space>\r
      <an-button type="primary">Edit</an-button>\r
      <an-button type="success">Delete</an-button>\r
    </an-space>\r
  </template>\r
  </an-data-table>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue';\r
\r
// 生成一百条示例数据\r
const tableData = ref([]);\r
\r
function generateData(count) {\r
  const data = [];\r
  for (let i = 1; i <= count; i++) {\r
    data.push({\r
      id: i,\r
      name: \`User \${i}\`,\r
      age: Math.floor(Math.random() * 50) + 20, // 随机年龄在20到70之间\r
      email: \`user\${i}@example.com\`,\r
      actions: 'Edit, Delete' // 这个字段可以用于插槽\r
    });\r
  }\r
  return data;\r
}\r
\r
// 初始化数据\r
tableData.value = generateData(100);\r
\r
// 表头\r
const headers = ['ID', 'Name', 'Age', 'Email', 'Actions'];\r
\r
// 列宽度\r
const columnWidths = ['50px', '200px', '50px', '400px', '150px'];\r
<\/script>\r
`;export{n as default};
