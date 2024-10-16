const n=`<template>
  <an-image :images="images" objectFit="fill"/>
  <an-image :images="images2" objectFit="contain"/>
  <an-image :images="images3" objectFit="cover"/>
  <an-image :images="images4" objectFit="none"/>
  <an-image :images="images5" objectFit="scale-down"/>
</template>

<script setup>
const images = ref([
  'https://i0.hippopx.com/photos/458/225/316/fox-tree-stump-sleeping-thumb.jpg'
])

const images2 = ref([
  'https://i0.hippopx.com/photos/689/371/832/california-road-highway-mountains-thumb.jpg'
])

const images3 = ref([
  'https://i0.hippopx.com/photos/965/315/755/fall-autumn-red-season-thumb.jpg'
])

const images4 = ref([
  'https://i0.hippopx.com/photos/309/762/328/france-mountains-fog-mist-thumb.jpg'
])

const images5 = ref([
  'https://i0.hippopx.com/photos/609/453/213/wild-flowers-flowers-plant-macro-thumb.jpg'
])
<\/script>
`;export{n as default};
