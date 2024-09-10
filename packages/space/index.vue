<template>
  <div class="an-space" :style="anStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AnSpace",
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Array,
      default: () => [10, 10], // 使用函数返回默认值，确保每次都是新的数组实例
    },
  },
  setup(props) {
    const anStyle = computed(() => {
      const baseStyle = {
        display: props.inline ? "inline-flex" : "flex",
        "flex-wrap": "wrap",
        "align-items": "center",
        width: "fit-content",
      };

      if (!props.inline) {
        // 如果 inline 为 true，则设置 row-gap 和 column-gap（如果支持）
        // 注意：不是所有浏览器都支持 row-gap 和 column-gap，你可能需要使用其他方法或 polyfill
        baseStyle["row-gap"] = `${props.size[0]}px`;
        baseStyle["column-gap"] = `${props.size[1]}px`;
        baseStyle["flex-direction"] = `column`;
      } else {
        // 如果 inline 为 false，则只设置 gap（或 margin，取决于你的需求）
        baseStyle.gap = `${props.size[0]}px`; // 只设置一个值，用于行和列之间的间隙
      }

      return baseStyle;
    });

    return { anStyle };
  },
};
</script>
