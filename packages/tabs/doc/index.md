## Tabs 标签页

<h5 style="color: #66d476">我属于你的注定，不属于我的命运</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基础用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 暂时还没想好写些什么</p>
<BasicDemo />
<Preview comp="tabs" demo="basic_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">AnTabs相关属性~</p>
<script setup>
    import ApiTable from '../../../src/components/api_table.vue'
    const tabs_data = {
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
                name: 'width',
                type: 'String | Number',
                default: 'null',
                explain: '宽度'
            },
            {
                name: 'height',
                type: 'String | Number',
                default: 'null',
                explain: '高度'
            }
        ]
  }
  const pane_data = {
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
                name: 'width',
                type: 'String | Number',
                default: 'null',
                explain: '宽度'
            },
            {
                name: 'height',
                type: 'String | Number',
                default: 'null',
                explain: '高度'
            }
        ]
  }
</script>
<ApiTable :data="tabs_data" />

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">AnPane相关属性~</p>
<ApiTable :data="pane_data" />

### Function 函数

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">暂时还没想好写些什么~</p>
<script setup>
    const function_data = {
        columns: [
           {
                title: '名称'
            },
            {
                title: '说明'
            }
        ],
        item: [
            {
                name: 'selectTabByTitle',
                explain: '打开指定标签页'
            },
            {
                name: 'closeTabByTitle',
                explain: '关闭指定标签页'
            }
        ]
  }
</script>
<ApiTable :data="function_data" />
