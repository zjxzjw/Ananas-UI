<template>
  <p>
    <an-input v-model="val" placeholder="图标用法">
      <template #front>
        <an-icon name="search" />
      </template>
    </an-input>
  </p>
  <p>
    <an-input v-model="val" placeholder="图标用法">
      <template #end>
        <an-icon name="monitor" />
      </template>
    </an-input>
  </p>
  <p>
    <an-input v-model="val" placeholder="图标用法">
      <template #front>
        <an-icon name="search" />
      </template>
      <template #end>
        <an-icon name="monitor" />
      </template>
    </an-input>
  </p>
</template>

<script setup>
import { ref } from "vue";
import AnIcon from "../../icon";

const val = ref("");
</script>
