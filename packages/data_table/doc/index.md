## Data Table 数据表格

<h5 style="color: #66d476">杜松混合茉莉的风回忆里被爱</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import AlignDemo from '../demo/align_demo.vue'
    import BorderDemo from '../demo/border_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">超级精选！</p>
<BasicDemo />
<Preview comp="data_table" demo="basic_demo" />

### 对齐方式

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">靠右一点！</p>
<AlignDemo />
<Preview comp="data_table" demo="align_demo" />

### 尺寸

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以定制的表格！</p>
<SizeDemo />
<Preview comp="data_table" demo="size_demo" />

### 边框

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">边框是 crucial 的！</p>
<BorderDemo />
<Preview comp="data_table" demo="border_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">Better Me!</p>
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
                name: 'data',
                type: 'Array',
                default: '[]',
                explain: '数据'
            },
            {
                name: 'bordered',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否开启边框'
            },
			{
				name: 'show-header',
				 type: 'Boolean',
                default: 'false | true',
                explain: '是否开启标头'
			},
			{
				name: 'table-height',
				type: 'String',
				default: 'auto',
				explain: '高度'
			},
			{
				name: 'width',
				type: 'String',
				default: '100%',
				explain: '宽度'
			},
			{
				name: 'align',
				type: 'String',
				default: 'left',
				explain: '对齐方式'
			},
			{
				name: 'head-background',
				type: 'String',
				default: 'white',
				explain: '标头背景'
			},
			{
				name: 'head-color',
				type: 'String',
				default: 'black',
				explain: '标头文字颜色'
			}
        ]
  }
</script>
<ApiTable :data="data" />
