## Loading 加载

<h5 style="color: #66d476">不能握的手从此匿名的朋友！</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基础用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 失去的温柔最温柔~</p>
<BasicDemo />
<Preview comp="loading" demo="basic_demo"/>

<!-- API表格 -->

### API 属性

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
                name: 'visible',
                type: 'boolean',
                default: 'true',
                explain: '显示/隐藏'
            },
            {
                name: 'message',
                type: 'string',
                default: '""',
                explain: '加载文案'
            },
            {
                name: 'iconName',
                type: 'string',
                default: 'spinner',
                explain: '加载图标名称'
            },
            {
                name: 'fullScreen',
                type: 'boolean',
                default: 'false',
                explain: '是否全屏'
            }
        ]
  }
</script>
<ApiTable :data="data" />
