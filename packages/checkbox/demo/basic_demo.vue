<template>
    <an-checkbox :value="items" v-model="selectedValues"/>
</template>

<script>

export default {
  data() {
    return {
      selectedValues: [], // 用于存储选中的值
      items: [
        { id: '1', label: '微风', value: 'option1' },
        { id: '2', label: '需要', value: 'option2' },
        { id: '3', label: '竹林', value: 'option3' }
      ]
    };
  }
};
</script>
