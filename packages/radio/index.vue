<template>
  <div class="an-radio">
    <div class="an-radio-item" v-for="(item, index) in options" :key="index" @click="change(item, index)"
         :class="{ 'an-radio-item-disabled': item.disabled }">
      <span :class="{ active: radioIndex === index }"></span>
      {{ item[filedLabel] }}
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue'

export default {
  name: "AnRadio"
}
</script>

<script setup>
const emit = defineEmits(['change'])

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  inline: {
    type: Boolean,
    default: false
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
  radioIndex: {
    type: Number,
    default: -1
  }
})
const radioIndex = ref(props.radioIndex)

const isInline = ref('inline-flex')

props.inline ? isInline.value = 'inline-flex' : isInline.value = 'flex'

const change = (e, index) => {
  if (!e.disabled) {
    radioIndex.value = index
    emit('change', e)
  }
}
</script>

<style lang="scss" scoped>
.an-radio {
  display: inline-block;
  width: 100%;
  height: auto;
  overflow: hidden;

  .an-radio-item {
    width: auto;
    height: auto;
    overflow: hidden;
    display: v-bind(isInline);
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
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
      border-radius: 50%;
      background-color: #e0dede;
      transition: transform .15s ease-in;

      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        //background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        transition: transform .15s ease-in;
      }
    }

    span.active {
      background-color: v-bind('props.customColor');
      border: 1px solid v-bind('props.customColor');
    }
  }

  .an-radio-item-disabled {
    cursor: no-drop;
    color: #808080;

    span {
      border: 1px solid #808080;
      background-color: #808080;

      &::after {
        //background-color: white;
      }
    }
  }
}
</style>
