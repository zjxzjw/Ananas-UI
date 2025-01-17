<template>
  <div class="tableBox" :style="{ height: tableHeight, width: width }">
    <table class="an-table" :class="{ 'an-table-border': bordered }">
      <!-- 渲染表头 -->
      <thead v-if="showHeader">
      <tr>
        <slot></slot>
      </tr>
      </thead>
      <!-- 渲染表格主体数据 -->
      <tbody>
      <tr v-for="(item, rowIndex) in paginatedData" :key="rowIndex">
        <td v-for="(column, colIndex) in columns" :key="colIndex" :style="{ width: column.width, textAlign: align }">
          <template v-if="$slots.default && $slots.default()[colIndex].children">
            <RenderSlot :slot="$slots.default()[colIndex].children.default({row:item})"></RenderSlot>
          </template>
          <template v-else>
            {{ item[column.prop] }}
          </template>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-if="showPagination" class="pagination-container">
    <!-- 分页组件 -->
    <AnPagination :total="dataCount"
                  :page-size="pageSize"
                  @update:current-page="currentPage = $event"
                  @update:page-size="updatePageSize($event)"
                  :show-total-count="showTotalCount"
                  :show-page-size-selector="showPageSizeSelector"
                  :on-change="handlePageChange"
    />
  </div>
</template>

<script>
export default {
  name: 'AnDataTable',
}
</script>

<script setup>
import {ref, computed, watch} from 'vue';
import RenderSlot from './render-slot';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  bordered: {
    type: Boolean,
    default: false
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  tableHeight: {
    type: String,
    default: 'auto'
  },
  width: {
    type: String,
    default: '100%'
  },
  align: {
    type: String,
    default: 'left'
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  defaultPageSize: {
    type: Number,
    default: 10
  },
  showTotalCount: {
    type: Boolean,
    default: false
  },
  showPageSizeSelector: {
    type: Boolean,
    default: false
  },
  paginationAlign: {
    type: String,
    default: 'left'
  },
  dataCount: {
    type: Number,
    default: 0
  },
  onChange: {
    type: Function,
    default: () => {
    }
  }
});

// 提供columns给子组件
const columns = ref([]);
provide('columns', columns);

// 分页相关的状态和计算属性
const currentPage = ref(1);
const pageSize = ref(props.defaultPageSize);

// 当defaultPageSize改变时更新pageSize
watch(() => props.defaultPageSize, (newSize) => {
  if (newSize !== pageSize.value) {
    pageSize.value = newSize;
    currentPage.value = 1; // 重置当前页码为第一页
  }
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return props.data.slice(start, end);
});

const updatePageSize = (newSize) => {
  pageSize.value = newSize;
  currentPage.value = 1; // 重置当前页码为第一页
}

const handlePageChange = () => {
  props.onChange(currentPage.value);
}

</script>

<style lang="scss" scoped>
.tableBox {
  height: v-bind(tableHeight);
  overflow-y: auto;
  overflow-x: auto;
  width: v-bind(width);
}

.pagination-container {
  display: flex;
  justify-content: v-bind(paginationAlign);
  margin-top: 1rem;
}

.an-table {
  width: 100%;
  border-collapse: collapse;

  tr {
    display: table-row;
    text-align: v-bind(align);
    border-bottom: 1px solid #ccc;
  }

  td {
    color: #606270;
    border-bottom: 1px solid #ccc;
    text-align: v-bind(align);
    padding: 0.5rem;
  }

  &-border {
    th,
    td {
      border: 1px solid #ccc;
    }
  }
}

/* 修改垂直滚动条 */
::-webkit-scrollbar {
  width: 0.6rem; /* 修改宽度 */
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
