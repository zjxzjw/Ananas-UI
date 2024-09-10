<template>
  <an-table :data="data" width="100%" table-height="20vh"/>
</template>

<script setup>
const data = {
  columns: [{
    title: '名称'
  },
    {
      title: '歌手'
    },
    {
      title: '专辑'
    }
  ],
  item: [{
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
    },
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
    },
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    },
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    },
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    }
  ]
}
</script>
