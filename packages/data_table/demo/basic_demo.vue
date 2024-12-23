<template>
  <an-data-table :data="tableData"
                 :show-pagination="true"
                 :show-total-count="true"
                 :default-page-size="10"
                 :showPageSizeSelector="true"
                 pagination-align="flex-left">
    <an-data-table-column label="名称" prop="name" />
    <an-data-table-column label="歌手" prop="people" />
    <an-data-table-column label="专辑" prop="album" />
    <an-data-table-column label="Actions" prop="action">
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
  {name: '黄昏之时', people: 'RADWIMPS', album: '你的名字。'},
  {name: '梦灯笼', people: 'RADWIMPS', album: '你的名字。'},
  {name: '前前前世', people: 'RADWIMPS', album: '你的名字。'},
  {name: '没有什么大不了的', people: 'RADWIMPS', album: '你的名字。'},
  {name: '无法看见彼此', people: 'RADWIMPS', album: '你的名字。'},
  {name: '火花', people: 'RADWIMPS', album: '你的名字。'},
  {name: '黄昏之时', people: 'RADWIMPS', album: '你的名字。'},
  {name: '梦灯笼', people: 'RADWIMPS', album: '你的名字。'},
  {name: '前前前世', people: 'RADWIMPS', album: '你的名字。'},
  {name: '没有什么大不了的', people: 'RADWIMPS', album: '你的名字。'},
  {name: '无法看见彼此', people: 'RADWIMPS', album: '你的名字。'},
  {name: '火花', people: 'RADWIMPS', album: '你的名字。'},
  {name: '黄昏之时', people: 'RADWIMPS', album: '你的名字。'},
  {name: '梦灯笼', people: 'RADWIMPS', album: '你的名字。'},
  {name: '前前前世', people: 'RADWIMPS', album: '你的名字。'},
  {name: '没有什么大不了的', people: 'RADWIMPS', album: '你的名字。'},
  {name: '无法看见彼此', people: 'RADWIMPS', album: '你的名字。'},
  {name: '火花', people: 'RADWIMPS', album: '你的名字。'},
  {name: '黄昏之时', people: 'RADWIMPS', album: '你的名字。'},
  {name: '梦灯笼', people: 'RADWIMPS', album: '你的名字。'},
  {name: '前前前世', people: 'RADWIMPS', album: '你的名字。'},
  {name: '没有什么大不了的', people: 'RADWIMPS', album: '你的名字。'},
  {name: '无法看见彼此', people: 'RADWIMPS', album: '你的名字。'},
  {name: '火花', people: 'RADWIMPS', album: '你的名字。'},
]);
</script>
