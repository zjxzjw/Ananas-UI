## Upload 文件上传

<h5 style="color: #66d476">好像大概也许可能</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 基本用法</p>
<BasicDemo />
<Preview comp="upload" demo="basic_demo" />


<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">嗖嗖嗖！</p>
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
                name: 'options',
                type: 'Array',
                default: '[]',
                explain: '内容数据'
            },
            {
                name: 'none-header',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否有序号'
            },
            {
                name: 'number-color',
                type: 'String',
                default: '#ffcf3f',
                explain: '序号颜色'
            },
            {
                name: 'text-color',
                type: 'String',
                default: 'black',
                explain: '文本颜色'
            },
            {
                name: 'height',
                type: 'String',
                default: '100%',
                explain: '高度属性'
            }
        ]
  }
</script>
<ApiTable :data="data" />
