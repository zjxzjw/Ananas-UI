const n=`<template>\r
  <an-side-menu :menuItems="menuItems"/>\r
</template>\r
\r
<script setup>\r
const menuItems = ref([\r
  {\r
    title: '主页',\r
    link: '#home',\r
    active: true,\r
    open: false,\r
    children: []\r
  },\r
  {\r
    title: '产品',\r
    link: '#products',\r
    active: false,\r
    open: false,\r
    children: [\r
      {title: '产品A', link: '#product-a', active: false},\r
      {title: '产品B', link: '#product-b', active: false}\r
    ]\r
  },\r
  {\r
    title: '服务',\r
    link: '#services',\r
    active: false,\r
    open: false,\r
    children: []\r
  }\r
])\r
<\/script>\r
`;export{n as default};
