<template>
  <div class="an-pagination">
    <span v-if="showTotalCount">共 <span class="an-data_count">{{ total }}</span> 条</span>

    <an-icon name="chevron-double-left" @click="goToFirstPage" :disabled="currentPage === 1"/>
    <an-icon name="chevron-left" @click="prevPage" :disabled="currentPage === 1"/>

    <span v-for="n in pagesToShow" :key="n" :class="{ active: n === currentPage }" @click="goToPage(n)">
      {{ n }}
    </span>

    <an-icon name="chevron-right" @click="nextPage" :disabled="currentPage === totalPages"/>
    <an-icon name="chevron-double-right" @click="goToLastPage" :disabled="currentPage === totalPages"/>

    <select v-if="showPageSizeSelector" :value="pageSize" @change="onPageSizeChange">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AnPagination'
};
</script>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 10
  },
  showPageSizeSelector: {
    type: Boolean,
    default: false
  },
  // 新增：控制是否显示总条数
  showTotalCount: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:current-page', 'update:page-size']);

// 计算总页数
const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

// 当前页码
const currentPage = ref(1);

// 页面改变时触发事件
watch(currentPage, (newPage) => {
  emit('update:current-page', newPage);
});

// 显示的页码范围
const pagesToShow = computed(() => {
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, start + 4);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

// 转到指定页
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

// 上一页
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

// 下一页
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

// 跳转到第一页
function goToFirstPage() {
  currentPage.value = 1;
}

// 跳转到最后一页
function goToLastPage() {
  currentPage.value = totalPages.value;
}

// 每页显示条目数改变时触发事件
function onPageSizeChange(event) {
  const newSize = parseInt(event.target.value, 10);
  emit('update:page-size', newSize);
  // 重置当前页码为第一页
  currentPage.value = 1;
}
</script>

<style scoped lang="scss">
.an-pagination {
  display: flex;
  align-items: center;
}

.an-pagination button,
.an-pagination span,
.an-pagination select {
  margin: 0 5px;
  cursor: pointer;
}

.an-pagination .active {
  font-weight: bold;
  color: var(--color-primary);
}

.an-pagination button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.an-pagination select {
  padding: 2px 5px;
}

.an-pagination span:last-child {
  margin-left: auto;
}

.an-data_count{
  color: var(--color-primary);
}
</style>
