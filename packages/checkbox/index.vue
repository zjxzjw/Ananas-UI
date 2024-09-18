<template>
  <div class="checkbox-group" :class="{ 'is-checked': localValue }">
    <input
        style="display: none"
        type="checkbox"
        :id="option.id"
        :value="option.value"
        v-model="localValue"
        @change="handleChange"
    >
    <label :for="option.id" class="custom-checkbox">
      <span class="checkbox-indicator"></span>
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'AnCheckbox',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localValue: false // 初始化本地状态
    };
  },
  watch: {
    // 监听父组件传递的 value 变化
    value(newVal) {
      this.localValue = newVal.includes(this.option.value);
    }
  },
  created() {
    // 初始设置本地状态
    this.localValue = this.value.includes(this.option.value);
  },
  methods: {
    handleChange(event) {
      const newValue = event.target.checked;
      if (newValue) {
        // 当多选框被选中时，将当前值加入到父组件的 value 中
        this.$emit('input', [...this.value, this.option.value]);
      } else {
        // 当多选框被取消选中时，从父组件的 value 中移除当前值
        this.$emit('input', this.value.filter(val => val !== this.option.value));
      }
    }
  }
}
</script>

<style scoped>
.checkbox-group {
  display: inline-block;
  margin-right: 1em;
}

.custom-checkbox {
  position: relative;
  cursor: pointer;
}

.custom-checkbox .checkbox-indicator {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  position: relative;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 0.3em;
}

.custom-checkbox input[type=checkbox] {
  visibility: hidden;
  position: absolute;
  z-index: -1;
}

.checkbox-group.is-checked .custom-checkbox .checkbox-indicator {
  background-color: #ffcf3f; /* 修改背景颜色 */
  border-color: #ffcf3f; /* 修改边框颜色 */
}

.checkbox-group.is-checked .custom-checkbox .checkbox-indicator::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.2s;
  background: #ffcf3f;
  height: 6px;
  width: 3px;
  margin-top: -3px;
  margin-left: -2px;
}

.custom-checkbox .checkbox-indicator::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s;
  background: #ffcf3f;
  height: 6px;
  width: 3px;
  margin-top: -3px;
  margin-left: -2px;
}
</style>
