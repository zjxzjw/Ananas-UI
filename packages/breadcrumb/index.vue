<template>
  <div>
    <span v-for="(item, index) in data" :key="index" :class="anBreadcrumbClass">
      <span class="text">
        <router-link :to="item.path">
          {{ item.text }}
        </router-link>
      </span>
      <span v-if="index != data.length - 1" class="separator">{{ separator }}</span>
    </span>
  </div>
</template>

<script>
import {computed} from "vue"

export default {
  name: 'AnBreadcrumb'
}
</script>

<script setup>
const props = defineProps({
  separator: {
    type: String,
    default: '/'
  },
  separatorColor: {
    type: String,
    default: 'black'
  },
  separatorSize: {
    type: String,
    default: '12px'
  },
  separatorMargin: {
    type: String,
    default: '0.3rem'
  },
  textColor: {
    type: String,
    default: 'black'
  },
  textSize: {
    type: String,
    default: '12px'
  },
  textBorderColor: {
    type: String,
    default: 'white'
  },
  textBorderSize: {
    type: String,
    default: '1px'
  },
  textBorderType: {
    type: String,
    default: 'solid'
  },
  textBorderRadius: {
    type: String,
    default: '4px'
  },
  textBackgroundColor: {
    type: String,
    default: 'white'
  },
  data: {
    type: Array,
    default: () => []
  }
})

const anBreadcrumbClass = computed(() => {
  return {
    'an-breadcrumb': true
  }
})
</script>

<style lang="scss" scoped>
.an-breadcrumb {
  font-size: v-bind(textSize);
  margin: 0 0.1rem;
  color: v-bind(textColor);

  &:hover {
    cursor: pointer;
  }
}

.text {
  font-weight: 800;
  background-color: v-bind(textBackgroundColor);
  border: v-bind(textBorderSize) v-bind(textBorderType) v-bind(textBorderColor);
  padding: 0.1rem 0.3rem;
  border-radius: v-bind(textBorderRadius);

  a {
    text-decoration: none;
    color: v-bind(textColor);
  }
}

.separator {
  font-weight: 800;
  margin: v-bind(separatorMargin);
  color: v-bind(separatorColor);
  font-size: v-bind(separatorSize);
}
</style>
