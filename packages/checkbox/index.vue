<template>
  <div class="an-checkbox">
    <div class="an-checkbox-item" v-for="(item, index) in options" :key="index" @click="toggle(item, index)"
         :class="{ 'an-checkbox-item-disabled': item.disabled }">
      <span :class="{ active: isChecked(item) }"></span>
      {{ item[filedLabel] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AnCheckbox"
}
</script>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['change'])

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  inline: {
    type: Boolean,
    default: true
  },
  filedLabel: {
    type: String,
    default: 'label'
  },
  filedValue: {
    type: String,
    default: 'value'
  },
  customColor: {
    type: String,
    default: '#ffcf3f'
  },
  modelValue: {
    type: Array,
    default: () => []
  }
})

const selectedValues = ref(props.modelValue)

// 当外部传入的值发生变化时，同步内部状态
watch(() => props.modelValue, (newValue) => {
  selectedValues.value = newValue
}, { deep: true })

// 检查给定项是否已被选中
const isChecked = (item) => {
  return selectedValues.value.includes(item[props.filedValue])
}

// 切换选中状态
const toggle = (item, index) => {
  if (!item.disabled) {
    const value = item[props.filedValue]
    let newSelectedValues

    if (selectedValues.value.includes(value)) {
      // 如果已经选中，则移除
      newSelectedValues = selectedValues.value.filter(v => v !== value)
    } else {
      // 否则添加到选中的列表
      newSelectedValues = [...selectedValues.value, value]
    }

    selectedValues.value = newSelectedValues
    emit('update:modelValue', newSelectedValues)
    emit('change', newSelectedValues, item)
  }
}

const isInline = ref('inline-flex')

props.inline ? isInline.value = 'inline-flex' : isInline.value = 'flex'
</script>

<style lang="scss" scoped>
.an-checkbox {
  display: inline-block;
  width: 100%;
  height: auto;
  overflow: hidden;

  .an-checkbox-item {
    width: auto;
    height: auto;
    overflow: hidden;
    display: v-bind(isInline);
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    margin-top: 5px;
    user-select: none;

    span {
      width: 14px;
      height: 14px;
      overflow: hidden;
      display: inline-block;
      line-height: 20px;
      cursor: pointer;
      font-size: 14px;
      margin-right: 10px;
      user-select: none;
      position: relative;
      border: 1px solid #e0dede;
      border-radius: 4px;
      background-color: #e0dede;
      transition: transform .15s ease-in;
    }

    span.active {
      background-color: v-bind(customColor);
      border: 1px solid v-bind(customColor);

      &::after {
        opacity: 1;
      }
    }
  }

  .an-checkbox-item-disabled {
    cursor: no-drop;
    color: #808080;

    span {
      border: 1px solid #808080;
      background-color: #808080;
    }
  }
}
</style>
