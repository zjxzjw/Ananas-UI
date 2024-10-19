## Message 消息
<h5 style="color: #66d476">不是女神发的消息！！！</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import TimeDemo from '../demo/time_demo.vue'
    import SecondaryDemo from '../demo/secondary_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 基本的消息</p>
<BasicDemo />
<Preview comp="message" demo="basic_demo"/>

### 果冻消息
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 果冻类型的消息</p>
<SecondaryDemo />
<Preview comp="message" demo="secondary_demo"/>

### 消息时间
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 定制消息持续时间</p>
<TimeDemo />
<Preview comp="message" demo="time_demo"/>

<!-- API表格 -->
### API 属性
<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">你忍住不回消息以为是你赢了，可能别人根本不在乎！</p>
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
                name: 'message',
                type: 'String',
                default: 'null',
                explain: '内容数据'
            },
            {
                name: 'type',
                type: 'String',
                default: 'primary | success | error | info',
                explain: '类型属性'
            },
            {
                name: 'duration',
                type: 'String',
                default: '1500',
                explain: '持续时间'
            },
            {
                name: 'secondary',
                type: 'Boolean',
                default: 'false | true',
                explain: '次要属性'
            },
            {
                name: 'offset',
                type: 'Number',
                default: '10',
                explain: '偏移量(单位：px)'
            },
            {
                name: 'gap',
                type: 'Number',
                default: '20',
                explain: '消息间隔距离(单位：px)'
            }
        ]
  }
</script>
<ApiTable :data="data" />
