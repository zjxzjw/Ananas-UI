const n=`<script setup lang='ts'>\r
import AnTooltip from '../index'\r
<\/script>\r
\r
<template>\r
  <div class="box">\r
    <div class="center">\r
      <AnTooltip content="prompts info" placement="top-start">\r
        <template #reference>\r
          <AnButton>top-start</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="top">\r
        <template #reference>\r
          <AnButton>top</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="top-end">\r
        <template #reference>\r
          <AnButton>top-end</AnButton>\r
        </template>\r
      </AnTooltip>\r
    </div>\r
    <div class="between">\r
      <AnTooltip content="prompts info" placement="left-start">\r
        <template #reference>\r
          <AnButton>left-start</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="right-start">\r
        <template #reference>\r
          <AnButton>right-start</AnButton>\r
        </template>\r
      </AnTooltip>\r
    </div>\r
    <div class="between">\r
      <AnTooltip content="prompts info" placement="left">\r
        <template #reference>\r
          <AnButton>left</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="right">\r
        <template #reference>\r
          <AnButton>right</AnButton>\r
        </template>\r
      </AnTooltip>\r
    </div>\r
    <div class="between">\r
      <AnTooltip content="prompts info" placement="left-end">\r
        <template #reference>\r
          <AnButton>left-end</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="right-end">\r
        <template #reference>\r
          <AnButton>right-end</AnButton>\r
        </template>\r
      </AnTooltip>\r
    </div>\r
    <div class="center">\r
      <AnTooltip content="prompts info" placement="bottom-start">\r
        <template #reference>\r
          <AnButton>bottom-start</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="bottom">\r
        <template #reference>\r
          <AnButton>bottom</AnButton>\r
        </template>\r
      </AnTooltip>\r
      <AnTooltip content="prompts info" placement="bottom-end">\r
        <template #reference>\r
          <AnButton>bottom-end</AnButton>\r
        </template>\r
      </AnTooltip>\r
    </div>\r
  </div>\r
</template>\r
\r
<style>\r
.box {\r
  width: 600px;\r
}\r
\r
.center {\r
  display: flex;\r
  justify-content: center;\r
  gap: 40px;\r
  margin-bottom: 40px;\r
}\r
.between {\r
  display: flex;\r
  justify-content: space-between;\r
  gap: 40px;\r
  margin-bottom: 40px;\r
}\r
</style>\r
`;export{n as default};
