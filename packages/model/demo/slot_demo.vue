<template>
  <an-button type="primary" @click="showModal = true">点我</an-button>
  <AnModal v-model="showModal">
    <template #header>
      <an-icon name="close" @click="showModal = false" size="1.5em"/>
    </template>
    <template #close-icon>
      <an-icon name="close" @click="showModal = false" size="1.5em"/>
    </template>
    <template #body>
      <an-space :inline="true">
        <an-input v-model="val" placeholder="搜索">
          <template #end>
            <an-icon name="search" size="1.5em"/>
          </template>
        </an-input>
        <an-table :data="data"/>
      </an-space>
    </template>
    <template #footer>
      <an-space>
        <an-button type="success" @click="showModal = false">取消</an-button>
        <an-button type="primary" @click="showModal = false">确定</an-button>
      </an-space>
    </template>
  </AnModal>
</template>

<script setup>
import {ref} from 'vue'

const showModal = ref(false)
const value = ref('')

const data = {
  columns: [
    {
      title: '名称'
    },
    {
      title: '歌手'
    },
    {
      title: '专辑'
    }
  ],
  item: [
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    },
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    }, {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    }
  ]
}
</script>

