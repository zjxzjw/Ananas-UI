<template>
  <an-table :data="data" custom>
    <template #operation>
      <an-space>
        <an-button type="primary">修改</an-button>
        <an-button type="error">删除</an-button>
      </an-space>
    </template>
  </an-table>
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
    },
    {
      title: '操作'
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
    }
  ]
}
</script>
