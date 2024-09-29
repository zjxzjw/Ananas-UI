const a=`<template>
  <an-data-table :data="tableData" :bordered="true" :show-header="true" :table-height="'300px'" :width="'100%'">
    <an-data-table-column label="Name" prop="name" width="150px">
      <template #default="{ row, column }">
        {{ row[column.prop] }}
      </template>
    </an-data-table-column>
    <an-data-table-column label="Age" prop="age" width="80px">
      <template #default="{ row, column }">
        {{ row[column.prop] }}
      </template>
    </an-data-table-column>
    <an-data-table-column label="Address" prop="address" width="100px">
      <template #default="{ row, column }">
        {{ row[column.prop] }}
      </template>
    </an-data-table-column>
    <an-data-table-column label="Actions" width="150px" prop="action">
      <template #default="{ row }">
        <an-button type="primary" size="small" @click="onEdit(row)">Edit</an-button>
      </template>
    </an-data-table-column>
  </an-data-table>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  {name: 'John Doe', age: 28, address: 'New York'},
  {name: 'Jane Smith', age: 34, address: 'Los Angeles'},
]);

const onEdit = (row) => {
  console.log('Edit:', row);
};

const onDelete = (row) => {
  console.log('Delete:', row);
};
<\/script>
`;export{a as default};
