const n=`<template>\r
  <an-tree :options="treeOptions" />\r
</template>\r
\r
<script setup>\r
const state = reactive({\r
  treeOptions: [\r
    {\r
      label: "帅",\r
      children: [\r
        {\r
          label: "气",\r
          children: [\r
            {\r
              label: "的我",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      label: "勤",\r
      children: [\r
        {\r
          label: "劳",\r
          children: [\r
            {\r
              label: "的我",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      label: "躺",\r
      children: [\r
        {\r
          label: "平",\r
          children: [\r
            {\r
              label: "的我",\r
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
