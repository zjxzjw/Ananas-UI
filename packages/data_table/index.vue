<template>
  <div class="tableBox" :style="{ height: tableHeight, width: width }">
    <table class="an-table" :class="{ 'an-table-border': bordered }">
      <thead v-if="showHeader">
      <tr>
        <th v-for="(column, index) in columns" :key="index" :style="{ width: column.width, textAlign: align }" :class="{ 'custom-head': headBackground || headColor }">
          {{ column.label }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, rowIndex) in data" :key="rowIndex">
        <td v-for="(column, colIndex) in columns" :key="colIndex" :style="{ width: column.width, textAlign: align }">
          <slot :name="`cell-${colIndex}`" :row="item" :column="column">
            {{ item[column.prop] }}
          </slot>
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
import { computed, useSlots } from 'vue';

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
    default: '300px'
  },
  width: {
    type: String,
    default: '100%'
  },
  align: {
    type: String,
    default: 'left'
  },
  headBackground: {
    type: String,
    default: 'white'
  },
  headColor: {
    type: String,
    default: '#303133'
  }
});

const slots = useSlots();

const getColumnsFromSlots = () => {
  return (slots.default ? slots.default() : []).map(vnode => ({
    label: vnode.props.label,
    prop: vnode.props.prop,
    width: vnode.props.width
  }));
};

const columns = computed(() => {
  return getColumnsFromSlots();
});
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

  th {

    padding: 12px 0;
    text-align: v-bind(align);
    background: v-bind(headBackground);
    color: v-bind(headColor);
    padding: 1rem;
  }

  td {
    color: #606270;
    border-bottom: 1px solid #ccc;
    padding: 12px 0;
    text-align: v-bind(align);
    padding: 1rem;
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
