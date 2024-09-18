<template>
  <an-side-menu :menuItems="menuItems"/>
</template>

<script setup>
const menuItems = ref([
  {
    title: '主页',
    link: '#home',
    active: true,
    open: false,
    children: []
  },
  {
    title: '产品',
    link: '#products',
    active: false,
    open: false,
    children: [
      {title: '产品A', link: '#product-a', active: false},
      {title: '产品B', link: '#product-b', active: false}
    ]
  },
  {
    title: '服务',
    link: '#services',
    active: false,
    open: false,
    children: []
  }
])
</script>
