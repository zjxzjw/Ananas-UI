## Ellipsis 文本省略
<h5 style="color: #66d476">翻着我们的照片，想念若隐若现</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import LengthDemo from '../demo/length_demo.vue'
    import ShowDemo from '../demo/show_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">当文字过长时，这时候就需要使用文本省略功能来处理这个问题</p>
<BasicDemo />
<Preview comp="ellipsis" demo="basic_demo" />

### 最大长度
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">太长了~ &nbsp;不可以！</p>
<LengthDemo />
<Preview comp="ellipsis" demo="length_demo" />

### 显示
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">露出了鸡脚~</p>
<ShowDemo />
<Preview comp="ellipsis" demo="show_demo" />

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
                name: 'full-text',
                type: 'String',
                default: 'null',
                explain: '内容'
            },
            {
                name: 'max-length',
                type: 'Number',
                default: '30',
                explain: '文本长度'
            },
			{
				name: 'show-full-text',
				type: 'Boolean',
				default: 'false | true',
				explain: '是否显示'
			}
        ]
  }
</script>
<ApiTable :data="data" />

