## Notification 通知

<h5 style="color: #66d476">天空好想下雨，我好想住你隔壁</h5>

<script setup>
  import BasicDemo from '../demo/basic_demo.vue'
  import TypeDemo from '../demo/type_demo.vue'
  import HideCloseDemo from '../demo/hide_close_demo.vue'
  import PositionDemo from '../demo/position_demo.vue'
  import preview from '../../../src/components/preview.vue'
</script>

### 基础用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 基本通知</p>
<BasicDemo />
<preview comp="notification" demo="basic_demo"/>

### 不同类型的通知

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 不合适的话可以尝试换一个试试</p>
<TypeDemo />
<preview comp="notification" demo="type_demo"/>

### 隐藏关闭按钮

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 不想看见我？我走就是了呜呜呜</p>
<HideCloseDemo />
<preview comp="notification" demo="hide_close_demo"/>

### 自定义弹出位置

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 上上下下左左右右</p>
<PositionDemo />
<preview comp="notification" demo="position_demo"/>

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;"># 这个组件怎么可以这么丝滑</p>
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
