<script setup>
  import BasicDemo from '../demo/basic_demo.vue'
  import TriggerDemo from '../demo/trigger_demo.vue'
  import Preview from '../../../src/components/preview.vue'
</script>

## Tooltip 文字提示

<h5 style="color: #66d476">你站的方位，跟我中间隔着泪</h5>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"> 9 种不同方向的展示方式</p>
<BasicDemo />
<Preview comp="tooltip" demo="basic_demo"/>

### 触发方式

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">click or hover</p>
<TriggerDemo/>
<Preview comp="tooltip" demo="trigger_demo"/>

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">这个组件怎么可以这么丝滑</p>
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
                name: 'content',
                type: 'string',
                default: '""',
                explain: '文字内容'
            },
            {
                name: 'placement',
                type: 'top | right | bottom | left | top-start | top-end | right-start | right-end | bottom-start | bottom-end | left-start | left-end',
                default: 'bottom',
                explain: '显示位置'
            },
            {
              name: 'trigger',
              type: 'click | hover',
              default: 'hover',
              explain: '显示触发方式'
            }
        ]
    }
</script>
<ApiTable :data="data" />

<br>
<br>

### 插槽

<script setup>
    const data2 = {
        columns: [
            {
                title: '插槽名'
            },
            {
                title: '说明'
            }
        ],
        item: [
            {
                name: 'default',
                description: '显示的内容'
            },
            {
                name: 'reference',
                description: '触发 Tooltip 显示的 HTML 元素',
            }
        ]
    }
</script>
<ApiTable :data="data2" />