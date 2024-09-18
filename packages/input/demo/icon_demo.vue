<template>
  <p>
    <an-input v-model="val" placeholder="图标用法">
      <template #front>
        <an-icon name="search" size="1.5em"/>
      </template>
    </an-input>
  </p>
  <p>
    <an-input v-model="val" placeholder="图标用法">
      <template #end>
        <an-icon name="monitor" size="1.5em"/>
      </template>
    </an-input>
  </p>
  <p>
    <an-input v-model="val" placeholder="图标用法">
      <template #front>
        <an-icon name="search" size="1.5em"/>
      </template>
      <template #end>
        <an-icon name="monitor" size="1.5em"/>
      </template>
    </an-input>
  </p>
</template>

<script setup>
const val = ref("")
</script>
