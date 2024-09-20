## Checkbox 多选框

<h5 style="color: #66d476">还记得广场公园一起表演</h5>

<script setup>
    import BasicDemo from "../demo/basic_demo.vue"
    import InlineDemo from "../demo/inline_demo.vue"
    import CustomColorDemo from "../demo/custom_color_demo.vue"
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以选择多个！</p>
<BasicDemo />
<Preview comp="checkbox" demo="basic_demo" />

### 排列方式

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">竖着放好像也不错</p>
<InlineDemo />
<Preview comp="checkbox" demo="inline_demo" />

### 自定义颜色

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">改个颜色试试~</p>
<CustomColorDemo />
<Preview comp="checkbox" demo="custom_color_demo" />

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
                name: 'options',
                type: 'Array',
                default: '[]',
                explain: '选项'
            },
            {
                name: 'inline',
                type: 'Boolean',
                default: 'false | true',
                explain: '排列方式'
            },
			{
				name: 'model-value',
				type: 'Array',
				default: '[]',
				explain: '选择内容'
			},
			{
				name: 'custom-color',
				type: 'String',
				default: '#ffcf3f',
				explain: '自定义颜色'
			}
        ]
  }
</script>
<ApiTable :data="data" />
