const n=`<script setup lang='ts'>\r
<\/script>\r
\r
<template>\r
  <AnSpace>\r
      <AnTooltip content="prompts info">\r
        <template #reference>\r
          <AnButton>hover</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" trigger="click">\r
        <template #reference>\r
          <AnButton>click</AnButton>\r
        </template>\r
      </AnTooltip>\r
  </AnSpace>\r
</template>\r
\r
<style>\r
.box {\r
  width: 600px;\r
}\r
\r
</style>\r
`;export{n as default};
