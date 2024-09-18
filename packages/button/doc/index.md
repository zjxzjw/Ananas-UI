## Button 按钮
<h5 style="color: #66d476">冒着掉眼泪的风险，2024 没联系方式的爱你</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import DisabledDemo from '../demo/disabled_demo.vue'
    import IconDemo from '../demo/icon_demo.vue'
    import RoundDemo from '../demo/round_demo.vue'
    import SecondaryDemo from '../demo/secondary_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import CustomColorDemo from '../demo/custom_color_demo.vue'
	import TransformDemo from '../demo/transform_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">按钮的基本用法 啊吧啊吧～</p>
<BasicDemo />
<Preview comp="button" demo="basic_demo" />

### 次要按钮
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">看起来像果冻</p>
<SecondaryDemo />
<Preview comp="button" demo="secondary_demo"/>

### 尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">有default、small、large三种尺寸</p>
<SizeDemo />
<Preview comp="button" demo="size_demo"/>

### 动画效果
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">示例代码终于修复了~</p>
<TransformDemo />
<Preview comp="button" demo="transform_demo"/>

### 禁用状态
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">不许点！</p>
<DisabledDemo />
<Preview comp="button" demo="disabled_demo"/>

### 图标按钮
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">图标按钮</p>
<IconDemo />
<Preview comp="button" demo="icon_demo"/>

### 圆角按钮
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">圆圆的也很可爱~</p>
<RoundDemo />
<Preview comp="button" demo="round_demo"/>

### 自定义颜色
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">不好看！</p>
<CustomColorDemo />
<Preview comp="button" demo="custom_color_demo"/>

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
                name: 'type',
                type: 'String',
                default: 'primary | success | error | info',
                explain: '类型属性'
            },
            {
                name: 'round',
                type: 'Boolean',
                default: 'false | true',
                explain: '圆角属性'
            },
			{
				name: 'transform',
				type: 'String',
				default: 'null | scale(1.1)',
				explain: '动画效果'
			},
            {
                name: 'disabled',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否禁用'
            },
            {
                name: 'secondary',
                type: 'Boolean',
                default: 'false | true',
                explain: '次要按钮属性'
            },
            {
                name: 'size',
                type: 'String',
                default: 'default | small | large',
                explain: '尺寸属性'
            },
            {
                name: 'background',
                type: 'String',
                default: '#ffcf3f',
                explain: '背景颜色属性'
            },
            {
                name: 'text-color',
                type: 'String',
                default: '#fff',
                explain: '文字颜色属性'
            },
        ]
  }
</script>
<ApiTable :data="data" />
