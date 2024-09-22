const n=`<template>\r
  <an-image :images="images" objectFit="fill"/>\r
  <an-image :images="images2" objectFit="contain"/>\r
  <an-image :images="images3" objectFit="cover"/>\r
  <an-image :images="images4" objectFit="none"/>\r
  <an-image :images="images5" objectFit="scale-down"/>\r
</template>\r
\r
<script setup>\r
const images = ref([\r
  'https://i0.hippopx.com/photos/458/225/316/fox-tree-stump-sleeping-thumb.jpg'\r
])\r
\r
const images2 = ref([\r
  'https://i0.hippopx.com/photos/689/371/832/california-road-highway-mountains-thumb.jpg'\r
])\r
\r
const images3 = ref([\r
  'https://i0.hippopx.com/photos/965/315/755/fall-autumn-red-season-thumb.jpg'\r
])\r
\r
const images4 = ref([\r
  'https://i0.hippopx.com/photos/309/762/328/france-mountains-fog-mist-thumb.jpg'\r
])\r
\r
const images5 = ref([\r
  'https://i0.hippopx.com/photos/609/453/213/wild-flowers-flowers-plant-macro-thumb.jpg'\r
])\r
<\/script>\r
`;export{n as default};
