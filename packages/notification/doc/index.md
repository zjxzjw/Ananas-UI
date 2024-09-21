<script setup>
  import BasicDemo from '../demo/basic_demo.vue'
  import TypeDemo from '../demo/type_demo.vue'
  import HideCloseDemo from '../demo/hide_close_demo.vue'
  import PositionDemo from '../demo/position_demo.vue'
  import preview from '../../../src/components/preview.vue'

</script>

### 基础用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">基本用法</p>
<BasicDemo />
<preview comp="notification" demo="basic_demo"/>

### 自定义消息弹出的位置
<PositionDemo />
<preview comp="notification" demo="position_demo"/>

### 不同类型的通知
<TypeDemo />
<preview comp="notification" demo="type_demo"/>

### 隐藏关闭按钮
<HideCloseDemo />
<preview comp="notification" demo="hide_close_demo"/>

### API 属性
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">关于怎么控制按钮，看看这</p>
<script setup>
    import ApiTable from '../../../src/components/api_table.vue'
    const data = {
        columns: [
            {
                title: '名称'
            },
            {
                title: '类型'
            },
            {
                title: '默认值'
            },
            {
                title: '说明'
            }
        ],
        item: [
            {
                name: 'title',
                type: 'string',
                default: '""',
                explain: '标题'
            },
            {
                name: 'message',
                type: 'string',
                default: '""',
                explain: '通知栏正文内容'
            },
            {
              name: 'icon',
              type: 'string',
              default: '-',
              explain: '自定义图标'
            },
            {
                name: 'type',
                type: 'success | info | warning | error | ""',
                default: '""',
                explain: '通知的类型'
            },
            {
                name: 'duration',
                type: 'number',
                default: '5000',
                explain: '显示时间，单位为毫秒。设为 0 则不自动关闭'
            },
            {
                name: 'position',
                type: 'top-left | top-right | bottom-left | bottom-right',
                default: 'top-right',
                explain: '自定义弹出位置'
            },
            {
                name: 'offset',
                type: 'number',
                default: '30',
                explain: '间隔距离'
            },
            {
                name: 'hideClose',
                type: 'boolean',
                default: 'false',
                explain: '是否隐藏关闭按钮'
            },
        ]
  }
</script>
<ApiTable :data="data" />