const e=`<template>\r
  <AnCard @click="handleCardClick">\r
    <template #header>卡片标题</template>\r
    <template #body>卡片内容</template>\r
    <template #footer>卡片底部</template>\r
  </AnCard>\r
</template>\r
\r
<script setup>\r
const handleCardClick = () => {\r
  alert('点击了卡片')\r
}\r
<\/script>\r
`;export{e as default};
