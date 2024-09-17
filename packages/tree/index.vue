<template>
  <div class="an-side-menu-box">
    <li
      v-for="(item, index) in newOptions"
      :key="index"
      @click.stop="isOpen(item)"
      :class="anSideMenuClass"
    >
      <span>{{ item.label }}</span>
      <transition name="slide-fade">
        <ul v-show="item.isOpened" v-if="item.children && item.children.length">
          <an-side-menu
            :options="item.children"
            :noneHeader="noneHeader"
            :numberColor="numberColor"
          />
        </ul>
      </transition>
    </li>
  </div>
</template>

<script>
export default {
  name: "Anside-menu",
};
</script>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  noneHeader: {
    type: Boolean,
    default: false,
  },
  numberColor: {
    type: String,
    default: "#ffcf3f",
  },
  textColor: {
    type: String,
    default: "black",
  },
  height: {
    type: String,
    default: "100%",
  },
});

const newOptions = ref(props.options);

const isOpen = (item) => {
  item.isOpened = !item.isOpened;
};

const anSideMenuClass = computed(() => {
  return {
    "an-side-menu": true,
    "an-side-menu-head": props.noneHeader,
    "an-side-menu-box": props.height,
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
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.an-side-menu {
  color: v-bind(numberColor);

  span {
    color: v-bind(textColor);
  }
}

.an-side-menu-head {
  list-style: none;
}

.an-side-menu-box {
  height: v-bind(height);
}
</style>
