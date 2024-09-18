<template>
  <div :class="input_class">
    <div v-if="$slots.front" class="input_front_class">
      <slot name="front"></slot>
    </div>
    <input
      :class="[
        $slots.front ? 'input_within_front' : '',
        $slots.end ? 'input_within_end' : '',
      ]"
      :type="inputType"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <div v-if="$slots.end" class="input_end_class">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AnInput",
};
</script>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String | Number,
  placeholder: String,
  disabled: Boolean,
  round: Boolean,
  password: Boolean,
  size: String,
});

const inputType = computed(() => {
  return props.password ? "password" : "text";
});

const input = (e) => {
  emit("update:modelValue", e.target.value);
};

const input_class = computed(() => {
  return [
    "an-input",
    {
      "an-input-small": props.size === "small",
    },
    {
      "an-input-medium": props.size === "medium",
    },
    {
      "an-input-large": props.size === "large",
    },
    {
      "an-input-large-max": props.size === "large-max",
    },
    {
      "an-input-round": props.round,
    },
    {
      "an-input-disabled": props.disabled,
    },
  ];
});
</script>

<style lang="scss" scoped>
.input_front_class,
.input_end_class {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0 8px;
  white-space: nowrap;
  border: 1px solid #d4d3d3;
}

.input_front_class {
  margin-right: -1px;
  border-radius: 4px 0 0 4px;
}

.input_end_class {
  margin-left: -1px;
  border-radius: 0 4px 4px 0;
}

.an-input {
  display: inline-flex;
  min-width: 260px;

  input {
    outline: none;
    border: 1px solid #d4d3d3;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: #505050;
    border-radius: 4px;
    transition: all 0.15s ease;

    &:focus {
      border-color: #ffcf3f;
    }
  }

  .input_within_front {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .input_within_end {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.an-input-disabled {
  border-color: #e5e5e5;
  color: #c0c0c0;

  input {
    cursor: no-drop;
  }
}

.an-input-round {
  input {
    border-radius: 20px;
  }
}

.an-input-small {
  input {
    height: 10px;
  }
}

.an-input-medium {
  input {
    height: 28px;
  }
}

.an-input-large {
  input {
    height: 36px;
  }
}

.an-input-large-max {
  input {
    height: 48px;
  }
}
</style>
