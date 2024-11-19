const n=`<template>\r
  <an-tree :options="treeOptions" none-header />\r
</template>\r
\r
<script setup>\r
const state = reactive({\r
  treeOptions: [\r
    {\r
      label: "一级 1",\r
      children: [\r
        {\r
          label: "二级 1-1",\r
          children: [\r
            {\r
              label: "三级 1-1-1",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      label: "一级 1",\r
      children: [\r
        {\r
          label: "二级 1-1",\r
          children: [\r
            {\r
              label: "三级 1-1-1",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      label: "一级 1",\r
      children: [\r
        {\r
          label: "二级 1-1",\r
          children: [\r
            {\r
              label: "三级 1-1-1",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
  ],\r
});\r
\r
const { treeOptions } = state;\r
<\/script>\r
`;export{n as default};
