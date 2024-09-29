const n=`<template>
  <an-table :data="data" border/>
</template>

<script setup>
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
<\/script>
`;export{n as default};
