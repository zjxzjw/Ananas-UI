## Chart 图表

<h5 style="color: #66d476">这世界总有人在忙忙碌碌寻宝藏</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import LineDemo from '../demo/line_demo.vue'
    import PieDemo from '../demo/pie_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">看起来有点像万神殿的柱子！</p>
<BasicDemo />
<Preview comp="chart" demo="basic_demo" />

### 常用图形

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">具体可参考Echarts官网, 这里只做基础封装</p>
<LineDemo />
<Preview comp="chart" demo="line_demo" />

### 其他类型

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">具体可参考Echarts官网, 这里只做基础封装</p>
<PieDemo />
<Preview comp="chart" demo="pie_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">具体属性可参考Echarts官网~</p>
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
                name: 'chart-data',
                type: 'Array',
                default: 'null',
                explain: '图表数据'
            },
            {
                name: 'chart-type',
                type: 'String',
                default: 'bar | line | pie | ......',
                explain: '类型'
            },
			{
				name: 'chart-height',
				type: 'String',
				default: '300px',
				explain: '高度'
			},
			{
				name: 'custom-options',
				type: 'Object',
				default: '{}',
				explain: '自定义选项'
			}
        ]
  }
</script>
<ApiTable :data="data" />
