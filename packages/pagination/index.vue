<template>
  <div class="an-pagination">
    <span v-if="showTotalCount">共 <span class="an-data_count">{{ total }}</span> 条</span>

    <an-icon name="chevron-left" @click="prevPage" :disabled="currentPage === 1"/>

    <span v-for="n in pagesToShow" :key="n" :class="{ active: n === currentPage }" @click="goToPage(n)">
      {{ n }}
    </span>

    <an-icon name="chevron-right" @click="nextPage" :disabled="currentPage === totalPages"/>

    <an-select :options="pageSizes" :modelValue="String(pageSize)" @update:modelValue="onPageSizeChange" size="small" />
  </div>
</template>

<script>
export default {
  name: 'AnPagination'
}
</script>

<script setup>
import { ref, computed, watch, reactive } from 'vue';

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
    emit('update:current-page', page);
  }
}

// 上一页
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('update:current-page', currentPage.value);
  }
}

// 下一页
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit('update:current-page', currentPage.value);
  }
}

// 每页显示条目数改变时触发事件
function onPageSizeChange(newSize) {
  emit('update:page-size', parseInt(newSize, 10));
  // 重置当前页码为第一页
  currentPage.value = 1;
  emit('update:current-page', 1);
}

// 页面大小选项
const pageSizes = reactive([
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '50', value: '50' },
  { label: '100', value: '100' }
]);
</script>

<style scoped lang="scss">
.an-pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  button,
  span,
  select {
    margin: 0 5px;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
    color: var(--color-primary);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  select {
    padding: 2px 5px;
  }

  span:last-child {
    margin-left: auto;
  }

  .an-data_count {
    color: var(--color-primary);
  }
}
</style>
