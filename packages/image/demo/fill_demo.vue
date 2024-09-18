<template>
  <an-image :images="images" objectFit="fill"/>
  <an-image :images="images2" objectFit="contain"/>
  <an-image :images="images3" objectFit="cover"/>
  <an-image :images="images4" objectFit="none"/>
  <an-image :images="images5" objectFit="scale-down"/>
</template>

<script setup>
const images = ref([
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
])

const images2 = ref([
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
])

const images3 = ref([
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
])

const images4 = ref([
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
])

const images5 = ref([
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
])
</script>
