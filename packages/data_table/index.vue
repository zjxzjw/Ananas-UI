<template>
  <div class="an-data-table" ref="tableRef" @scroll="handleScroll" :style="{ width: tableWidth, height: tableHeight }">
    <div v-if="fixedHeader" class="header-container" :style="{ width: tableWidth }">
      <table>
        <thead>
        <tr>
          <th
              v-for="(header, index) in headers"
              :key="index"
              :style="{ width: columnWidths[index] || 'auto' }"
              @click="sortData(index)"
          >
            {{ header }}
            <span v-if="sortColumn === index" :class="['sort-icon', sortDirection > 0 ? 'asc' : 'desc']"></span>
          </th>
        </tr>
        </thead>
      </table>
    </div>
    <div class="body-container" ref="bodyContainerRef" :style="{ top: fixedHeader ? '50px' : '0' }">
      <table>
        <thead v-if="!fixedHeader">
        <tr>
          <th
              v-for="(header, index) in headers"
              :key="index"
              :style="{ width: columnWidths[index] || 'auto' }"
              @click="sortData(index)"
          >
            {{ header }}
            <span v-if="sortColumn === index" :class="['sort-icon', sortDirection > 0 ? 'asc' : 'desc']"></span>
          </th>
        </tr>
        </thead>
        <tbody ref="tbodyRef" v-memo="[visibleItems, isZebra, rowHeight, columnWidths, headers]">
        <tr
            v-for="(item, index) in visibleItems"
            :key="`${item.id}-${index}`"
            :style="{ height: `${rowHeight}px` }"
            :class="{ 'zebra-row': isZebra && (index % 2 === 0) }"
        >
          <td
              v-for="(value, key, index) in item"
              :key="key"
              :style="{ width: columnWidths[headers.indexOf(key)] || 'auto' }"
          >
            <slot :name="`${key}-cell`" :value="value" :key="key" :item="item" :index="index">
              {{ value }}
            </slot>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="pagination-container">
    <an-pagination
        :total="total"
        :page-size="pageSize"
        :show-page-size-selector="showPageSizeSelector"
        :show-total-count="showTotalCount"
        @update:current-page="onPageChange"
        @update:page-size="onPageSizeChange"
    />
  </div>
</template>

<script>
export default {
  name: 'AnDataTable'
};
</script>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, onBeforeUnmount } from 'vue';
import _ from 'lodash-es';

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  headers: {
    type: Array,
    required: true
  },
  rowHeight: {
    type: Number,
    default: 50
  },
  showPageSizeSelector: {
    type: Boolean,
    default: false
  },
  showTotalCount: {
    type: Boolean,
    default: false
  },
  columnWidths: {
    type: [Array, Object],
    default: () => []
  },
  isZebra: {
    type: Boolean,
    default: false
  },
  tableWidth: {
    type: String,
    default: '100%'
  },
  tableHeight: {
    type: String,
    default: '400px'
  },
  fixedHeader: {
    type: Boolean,
    default: false
  }
});

const tableRef = ref(null);
const tbodyRef = ref(null);
const bodyContainerRef = ref(null);

// 当前页码
const currentPage = ref(1);

// 每页显示的条目数
const pageSize = ref(10);

// 可见项列表
const visibleItems = ref([]);

// 计算总条数
const total = computed(() => (Array.isArray(props.data) ? props.data.length : 0));

// 滚动位置
const scrollTop = ref(0);

// 排序相关状态
const sortColumn = ref(null);
const sortDirection = ref(1); // 1 for ascending, -1 for descending

// 更新可见项
const updateVisibleItems = () => {
  if (!Array.isArray(props.data)) return;
  const start = (currentPage.value - 1) * pageSize.value;
  const end = Math.min(start + pageSize.value, total.value);
  visibleItems.value = props.data.slice(start, end);
};

// 处理滚动事件
const handleScroll = _.throttle(() => {
  if (tableRef.value) {
    scrollTop.value = tableRef.value.scrollTop;
    updateVisibleItems();
  }
}, 16); // 16ms 是大约每秒 60 帧的间隔

// 监听数据变化
watch([() => props.data, currentPage, pageSize], () => {
  updateVisibleItems();
});

// 处理页码变化
function onPageChange(newPage) {
  currentPage.value = newPage;
  updateVisibleItems();
}

// 处理每页显示条目数的变化
function onPageSizeChange(newSize) {
  pageSize.value = newSize;
  currentPage.value = 1; // 重置到第一页
  updateVisibleItems();
}

// 排序函数
function sortData(columnIndex) {
  if (sortColumn.value === columnIndex) {
    sortDirection.value *= -1; // 切换排序方向
  } else {
    sortColumn.value = columnIndex;
    sortDirection.value = 1; // 默认升序
  }

  const sortedData = [...props.data].sort((a, b) => {
    const aValue = a[Object.keys(a)[columnIndex]];
    const bValue = b[Object.keys(b)[columnIndex]];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return (aValue - bValue) * sortDirection.value;
    } else {
      return (aValue > bValue ? 1 : -1) * sortDirection.value;
    }
  });

  // 更新原始数据
  props.data.splice(0, props.data.length, ...sortedData);
  currentPage.value = 1; // 重置到第一页
  updateVisibleItems();
}

// 初始化
onMounted(() => {
  updateVisibleItems();

  // 添加 ResizeObserver
  const resizeObserver = new ResizeObserver(updateVisibleItems);
  if (tbodyRef.value) {
    resizeObserver.observe(tbodyRef.value);
  }

  // 清理函数
  onBeforeUnmount(() => {
    if (resizeObserver && tbodyRef.value) {
      resizeObserver.unobserve(tbodyRef.value);
    }
  });
});
</script>

<style scoped lang="scss">
.an-data-table {
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 400px;
}

.header-container {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
}

.body-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.zebra-row {
  background-color: #f9f9f9;
}

.sort-icon {
  margin-left: 5px;
  &.asc::after {
    content: '▲';
  }
  &.desc::after {
    content: '▼';
  }
}

.pagination-container {
  float: left;
  margin-top: 1rem;
}

/* 修改垂直滚动条 */
::-webkit-scrollbar {
  width: 1rem;
}

/* 修改滚动条轨道背景色 */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* 修改滚动条滑块颜色 */
::-webkit-scrollbar-thumb {
  background-color: #ffcf3f;
}

/* 修改滚动条滑块悬停时的颜色 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 207, 63, 0.56);
}
</style>
