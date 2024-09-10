<template>
  <div :class="anSelectClass" v-clickOutside>
    <input
      type="text"
      readonly
      :value="selectValue"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <transition name="slide-fade">
      <div class="an-position-box" v-if="positionShow">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="change(item, index)"
          :class="{
            'item-disabled-li': item.disabled,
            'item-active-li': activeIndex == index,
          }"
          class="item-li"
        >
          {{ item[filedLabel] }}
        </li>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AnSelect",
};
</script>

<script setup>
const emit = defineEmits(["change", "update:modelValue"]);

const positionShow = ref(false);

const activeIndex = ref(-1);

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  filedLabel: {
    type: String,
    default: "label",
  },
  filedValue: {
    type: String,
    default: "value",
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  modelValue: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "default",
  },
});

const selectValue = ref(props.modelValue);

props.options.forEach((item, index) => {
  if (item[props.filedValue] === props.modelValue) {
    selectValue.value = item[props.filedLabel];
    activeIndex.value = index;
  }
});

const change = (item, index) => {
  if (!item.disabled) {
    activeIndex.value = index;
    positionShow.value = false;
    selectValue.value = item[props.filedLabel];
    emit("change", item);
    emit("update:modelValue", item[props.filedValue]);
  }
};

const vClickOutside = {
  beforeMount(el) {
    let hanlder = (e) => {
      if (!props.disabled) {
        if (el.contains(e.target) && e.target.className.indexOf("item-li") === -1) {
          positionShow.value = true;
        } else {
          if (!e.target.className.indexOf("item-disabled-li") === -1) {
          }
          positionShow.value = false;
        }
      }
    };

    document.addEventListener("click", hanlder);
  },
};

const anSelectClass = computed(() => {
  return {
    "an-select": true,
    "an-select-small": props.size === "small",
    "an-select-large": props.size === "large",
  };
});
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}

.an-select {
  width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;

  input {
    border: 1px solid #ccc;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    &:focus {
      border-color: #ffcf3f;
    }
  }

  .an-position-box {
    border-radius: 4px;
    z-index: 99;
    background-color: #fff;
    border: 1px solid #ccc;
    position: absolute;
    top: 42px;
    width: 100%;
    height: auto;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    li {
      font-size: 14px;
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;

      &.item-disabled-li {
        color: #ccc;
        cursor: no-drop;
      }
      &.item-active-li {
        color: #ffcf3f;
      }

      &:hover {
        background-color: #f5f7fa;
      }
    }
  }
}

.an-select-small {
  width: 100px;

  input {
    height: 28px;
  }

  .an-position-box {
    top: 45px;
  }
}

.an-select-large {
  width: 300px;

  input {
    height: 42px;
  }

  .an-position-box {
    top: 45px;
  }
}
</style>
