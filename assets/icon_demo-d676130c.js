const n=`<template>\r
  <p>\r
    <an-input v-model="val" placeholder="图标用法">\r
      <template #front>\r
        <an-icon name="search" size="1.5em"/>\r
      </template>\r
    </an-input>\r
  </p>\r
  <p>\r
    <an-input v-model="val" placeholder="图标用法">\r
      <template #end>\r
        <an-icon name="monitor" size="1.5em"/>\r
      </template>\r
    </an-input>\r
  </p>\r
  <p>\r
    <an-input v-model="val" placeholder="图标用法">\r
      <template #front>\r
        <an-icon name="search" size="1.5em"/>\r
      </template>\r
      <template #end>\r
        <an-icon name="monitor" size="1.5em"/>\r
      </template>\r
    </an-input>\r
  </p>\r
</template>\r
\r
<script setup>\r
const val = ref("")\r
<\/script>\r
`;export{n as default};
