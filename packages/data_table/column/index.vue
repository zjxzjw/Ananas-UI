<template>
  <th :style="{ width: width }" class="an-data-table-column">
    {{ label }}
  </th>
</template>

<script>
export default {
  name: 'AnDataTableColumn',
  inheritAttrs: false
};
</script>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  prop: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: 'auto' // 默认宽度为自动
  }
});

const column = inject('columns');

column.value.push({
  label: props.label,
  prop: props.prop
})

</script>

<style scoped>
.an-data-table-column {
  box-sizing: border-box; /* 确保 padding 和 border 不会增加元素的总宽度 */
  padding: 12px 0;
}
</style>
