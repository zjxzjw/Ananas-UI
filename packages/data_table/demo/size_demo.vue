<template>
  <an-data-table :data="tableData" width="100%" table-height="200px">
    <an-data-table-column label="名称" prop="name" width="150px" />
    <an-data-table-column label="歌手" prop="people" width="180px" />
    <an-data-table-column label="专辑" prop="album" width="100px" />
    <an-data-table-column label="Actions" width="150px" prop="action">
      <template #default="{ row }">
        <an-space>
          <an-button type="primary">Edit</an-button>
          <an-button type="success">Delete</an-button>
        </an-space>
      </template>
    </an-data-table-column>
  </an-data-table>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  {name: 'かたわれ時（黄昏之时）', people: 'RADWIMPS', album: '君の名は。'},
  {name: '一路向北', people: '周杰伦', album: 'J III MP3 Player'},
  {name: '匿名好友', people: '汪苏泷', album: '暂无收入'},
  {name: 'かたわれ時（黄昏之时）', people: 'RADWIMPS', album: '君の名は。'},
  {name: '一路向北', people: '周杰伦', album: 'J III MP3 Player'},
  {name: '匿名好友', people: '汪苏泷', album: '暂无收入'},
]);
</script>
