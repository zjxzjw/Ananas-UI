<template>
  <an-data-table
      :data="tableData"
      :headers="headers"
      :column-widths="columnWidths"
      :row-height="50"
      :show-page-size-selector="true"
      :show-total-count="true"
      :is-zebra="true"
      :fixed-header="true"
  >
  <template #actions-cell="slotProps">
    <an-space>
      <an-button type="primary">Edit</an-button>
      <an-button type="success">Delete</an-button>
    </an-space>
  </template>
  </an-data-table>
</template>

<script setup>
import { ref } from 'vue';

// 生成一百条示例数据
const tableData = ref([]);

function generateData(count) {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      age: Math.floor(Math.random() * 50) + 20, // 随机年龄在20到70之间
      email: `user${i}@example.com`,
      actions: 'Edit, Delete' // 这个字段可以用于插槽
    });
  }
  return data;
}

// 初始化数据
tableData.value = generateData(100);

// 表头
const headers = ['ID', 'Name', 'Age', 'Email', 'Actions'];

// 列宽度
const columnWidths = ['50px', '200px', '50px', '400px', '150px'];
</script>
