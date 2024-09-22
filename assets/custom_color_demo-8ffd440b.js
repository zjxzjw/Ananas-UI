const n=`<template>\r
  <an-radio\r
    :options="options"\r
    filed-label="name"\r
    filed-value="id"\r
    :radio-index="radioIndex"\r
    inline\r
    customColor="#66d476"\r
  />\r
</template>\r
\r
<script setup>\r
const state = reactive({\r
  options: [\r
    {\r
      name: "选项一",\r
      id: "1",\r
    },\r
    {\r
      name: "选项二",\r
      id: "2",\r
    },\r
    {\r
      name: "选项三",\r
      id: "3",\r
    },\r
  ],\r
});\r
\r
const { options } = state;\r
\r
const radioIndex = ref(0);\r
<\/script>\r
`;export{n as default};
