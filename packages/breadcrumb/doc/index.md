## Breadcrumb 面包屑
<h5 style="color: #66d476">在爱情没被定义为爱情的那几年。</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import CustomSeparatorDemo from '../demo/custom_separator_demo.vue'
    import SeparatorColorDemo from "../demo/separator_color_demo.vue"
    import TextColorDemo from "../demo/text_color_demo.vue"
    import MarginDemo from "../demo/margin_demo.vue"
    import CustomDemo from '../demo/custom_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">这东西长得和它名字不怎么像</p>
<BasicDemo />
<Preview comp="breadcrumb" demo="basic_demo" />

### 标签类型
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">带框框的面包屑导航</p>
<CustomDemo />
<Preview comp="breadcrumb" demo="custom_demo" />

### 自定义分隔符
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以独特！</p>
<CustomSeparatorDemo />
<Preview comp="breadcrumb" demo="custom_separator_demo" />

### 间距
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">通过margin属性控制距离</p>
<MarginDemo />
<Preview comp="breadcrumb" demo="margin_demo" />

### 分隔符颜色
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">定制个性的颜色！</p>
<SeparatorColorDemo />
<Preview comp="breadcrumb" demo="separator_color_demo" />

### 文字颜色
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">定制个性的颜色！</p>
<TextColorDemo />
<Preview comp="breadcrumb" demo="text_color_demo" />

<!-- API表格 -->
### API
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">有好多尺寸的标签</p>
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
                name: 'separator',
                type: 'String | Number',
                default: '/',
                explain: '分隔符'
            },
            {
                name: 'separator-color',
                type: 'String',
                default: 'black',
                explain: '分隔符颜色'
            },
            {
                name: 'separator-size',
                type: 'String',
                default: '12px',
                explain: '分隔符尺寸'
            },
            {
                name: 'separator-margin',
                type: 'String',
                default: '0.3rem',
                explain: '分隔符间距'
            },
            {
                name: 'text-color',
                type: 'String',
                default: 'black',
                explain: '文本颜色'
            },
            {
                name: 'text-size',
                type: 'String',
                default: 'black',
                explain: '文本大小'
            },
            {
                name: 'text-border-color',
                type: 'String',
                default: 'white',
                explain: '文本边框颜色'
            },
            {
                name: 'text-border-size',
                type: 'String',
                default: '1px',
                explain: '文本边框大小'
            },
            {
                name: 'text-border-type',
                type: 'String',
                default: 'solid',
                explain: '文本边框类型'
            },
            {
                name: 'text-border-radius',
                type: 'String',
                default: '4px',
                explain: '文本边框角度'
            },
            {
                name: 'text-background-color',
                type: 'String',
                default: 'white',
                explain: '文本背景颜色'
            },
            {
                name: 'data',
                type: 'Array',
                default: '[]',
                explain: '内容数据'
            }
        ]
  }
</script>
<ApiTable :data="data" />

<!-- 底部导航 -->
<script setup>
    import BottomTabs from '../../../src/components/bottom_tabs.vue'
</script>

<BottomTabs up="Textarea" down="Tree" />
