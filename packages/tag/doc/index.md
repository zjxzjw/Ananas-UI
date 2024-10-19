## Tag 标签

<h5 style="color: #66d476">爱情来得太快就像龙卷风</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import SecondaryDemo from '../demo/secondary_demo.vue'
    import RoundDemo from '../demo/round_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import ColorDemo from '../demo/color_demo.vue'
	import ScaleDemo from '../demo/scale_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># TAG的基本用法</p>
<BasicDemo />
<Preview comp="tag" demo="basic_demo"/>

### 次要标签

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 果冻标签</p>
<SecondaryDemo />
<Preview comp="tag" demo="secondary_demo"/>

### 圆角标签

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 圆的！</p>
<RoundDemo />
<Preview comp="tag" demo="round_demo"/>

### 动画效果

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 会动的标签！</p>
<ScaleDemo />
<Preview comp="tag" demo="scale_demo"/>

### 尺寸

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 有好多尺寸的标签</p>
<SizeDemo />
<Preview comp="tag" demo="size_demo"/>

### 自定义颜色

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 红，橙，黄，绿，青，蓝，紫的彩虹</p>
<ColorDemo />
<Preview comp="tag" demo="color_demo"/>

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">有好多尺寸的标签</p>
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
                name: 'secondary',
                type: 'Boolean',
                default: 'false | true',
                explain: '次要标签属性'
            },
			{
			    name: 'scale',
			    type: 'Boolean',
			    default: 'false | true',
			    explain: '是否开启动画效果'
			},
            {
                name: 'size',
                type: 'String',
                default: 'default | small | large',
                explain: '尺寸属性'
            },
            {
                name: 'background-color',
                type: 'String',
                default: '#ffcf3f',
                explain: '背景颜色属性'
            },
            {
                name: 'color',
                type: 'String',
                default: '#fff',
                explain: '文字颜色属性'
            },
        ]
  }
</script>
<ApiTable :data="data" />
