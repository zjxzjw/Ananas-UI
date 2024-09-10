<template>
  <div class="tableBox">
    <table :class="anTableClass">
      <thead>
        <tr>
          <th v-for="(item, index) in data.columns" :key="index">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.item" :key="index">
          <td v-for="(item2, index2) in item" :key="index2">{{ item2 }}</td>
          <td v-if="custom">
            <slot name="operation" :item="item"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AnTable",
};
</script>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => [],
  },
  width: {
    type: String,
    default: "100%",
  },
  align: {
    type: String,
    default: "center",
  },
  custom: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  headColor: {
    type: String,
    default: "#909399",
  },
  headBackground: {
    type: String,
    default: "white",
  },
  tableHeight: {
    type: String,
    default: "auto",
  },
});

const anTableClass = computed(() => {
  return {
    "an-table": true,
    "an-table-border": props.border,
  };
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
    border-bottom: 1px solid #909399;
    padding: 12px 0;
    text-align: v-bind(align);
    background: v-bind(headBackground);
    color: v-bind(headColor);
  }

  td {
    color: #606270;
    border-bottom: 1px solid #ccc;
    padding: 12px 0;
    text-align: v-bind(align);
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
