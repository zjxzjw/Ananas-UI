const n=`<script setup lang='ts'>
import AnTooltip from '../index'
<\/script>

<template>
  <AnSpace>
      <AnTooltip content="prompts info">
        <template #reference>
          <AnButton>hover</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" trigger="click">
        <template #reference>
          <AnButton>click</AnButton>
        </template>
      </AnTooltip>
  </AnSpace>
</template>

<style>
.box {
  width: 600px;
}

</style>
`;export{n as default};
