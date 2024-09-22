const n=`<template>
  <ul>
    <li v-for="(item, index) in displayedItems" :key="index">
      用户名: {{ item.name }}, 年龄: {{ item.age }}
    </li>
  </ul>

  <an-pagination
      :total="items.length"
      :pageSize="pageSize"
      v-model:current-page="currentPage"
      @update:page-size="(newSize) => { pageSize = newSize; currentPage = 1; }"
      :showPageSizeSelector="true"
      :showTotalCount="true"
  />
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';

// 生成100条模拟数据
const items = ref([]);

onMounted(() => {
  for (let i = 0; i < 100; i++) {
    items.value.push({
      name: \`用户\${i + 1}\`,
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18 // 随机年龄在18到80之间
    });
  }
});

const data = ref({
  columns: [
    {
      title: '名称'
    },
    {
      title: '歌手'
    }
  ],
  item: items
})

// 每页显示条目数
const pageSize = ref(10);

// 当前页码
const currentPage = ref(1);

// 计算当前页显示的数据
const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return items.value.slice(start, end);
});
<\/script>
`;export{n as default};
