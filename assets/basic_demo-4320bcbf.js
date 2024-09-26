const n=`<template>\r
  <ul>\r
    <li v-for="(item, index) in displayedItems" :key="index">\r
      用户名: {{ item.name }}, 年龄: {{ item.age }}\r
    </li>\r
  </ul>\r
\r
  <an-pagination\r
      :total="items.length"\r
      :pageSize="pageSize"\r
      v-model:current-page="currentPage"\r
      @update:page-size="(newSize) => { pageSize = newSize; currentPage = 1; }"\r
      :showPageSizeSelector="true"\r
      :showTotalCount="true"\r
  />\r
</template>\r
\r
<script setup>\r
import {ref, computed, onMounted} from 'vue';\r
\r
// 生成100条模拟数据\r
const items = ref([]);\r
\r
onMounted(() => {\r
  for (let i = 0; i < 100; i++) {\r
    items.value.push({\r
      name: \`用户\${i + 1}\`,\r
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18 // 随机年龄在18到80之间\r
    });\r
  }\r
});\r
\r
const data = ref({\r
  columns: [\r
    {\r
      title: '名称'\r
    },\r
    {\r
      title: '歌手'\r
    }\r
  ],\r
  item: items\r
})\r
\r
// 每页显示条目数\r
const pageSize = ref(10);\r
\r
// 当前页码\r
const currentPage = ref(1);\r
\r
// 计算当前页显示的数据\r
const displayedItems = computed(() => {\r
  const start = (currentPage.value - 1) * pageSize.value;\r
  const end = start + pageSize.value;\r
  return items.value.slice(start, end);\r
});\r
<\/script>\r
`;export{n as default};
