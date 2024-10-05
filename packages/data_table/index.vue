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
      <tr v-for="(item, rowIndex) in data" :key="rowIndex">
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
</template>

<script>
export default {
  name: 'AnDataTable',
}
</script>

<script setup>
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
  }
});

const columns = ref([]);
provide('columns', columns)

</script>

<style lang="scss" scoped>
.tableBox {
  height: v-bind(tableHeight);
  overflow-y: auto;
  overflow-x: auto;
  width: v-bind(width);
}

.an-table {
  width: 100%;
  border-collapse: collapse;

  tr{
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
