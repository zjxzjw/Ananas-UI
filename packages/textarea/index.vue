<template>
  <div class="an-textarea">
        <textarea
            :class="textareaClass"
            :rows="rows"
            :cols="cols"
            :value="modelValue"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :style="{ resize: resize ? 'auto' : 'none' }"
            @input="input"></textarea>
    <div class="an-textarea-count">
      {{ index }}/{{ maxlength }}
    </div>
  </div>
</template>
<script>
import {computed, ref} from 'vue'

export default {
  name: 'AnTextarea',
}
</script>

<script setup>
const index = ref(0)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  },
  cols: {
    type: Number,
    default: 30
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number,
    default: 10
  },
  resize: {
    type: Boolean,
    default: false
  }
})

const input = (e) => {
  index.value = e.target.value.length
  emit('update:modelValue', e.target.value)
}

const textareaClass = computed(() => {
  return {
    'an-textarea': true,
    'an-textarea-disabled': props.disabled
  }
})
</script>

<style lang="scss" scoped>
.an-textarea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;

  textarea {
    border: 1px solid #d4d3d3;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px 8px 10px 8px;
    outline: none;

    &:focus {
      border: 1px solid #ffcf3f;
    }
  }

  .an-textarea-count {
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    padding: 0 10px;
    color: #999;
    position: absolute;
    box-sizing: border-box;
    bottom: 10px;
  }
}

.an-textarea-disabled {
  textarea {
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    color: #999;

    &hover {
      cursor: no-drop;
    }
  }
}
</style>
