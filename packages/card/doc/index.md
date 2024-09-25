## Card 卡片

<h5 style="color: #66d476">等到秋叶终于金黄，等到华发悄然苍苍</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import HoverableDemo from '../demo/hoverable_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import BodyDemo from '../demo/body_demo.vue'
    import FooterDemo from '../demo/footer_demo.vue'
    import ColorDemo from '../demo/color_demo.vue'
    import BorderDemo from '../demo/border_demo.vue'
    import BoxShowDemo from '../demo/box_show_demo.vue'
    import HeightDemo from '../demo/height_demo.vue'
    import ClickDemo from '../demo/click_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">卡片的基本用法</p>
<BasicDemo />
<Preview comp="card" demo="basic_demo" />

### 悬浮卡片

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">好像可以飞起来？</p>
<HoverableDemo />
<Preview comp="card" demo="hoverable_demo" />

### 卡片尺寸

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">自定义卡片尺寸</p>
<SizeDemo />
<Preview comp="card" demo="size_demo" />

### 没有标题

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">没有标题的卡片</p>
<BodyDemo />
<Preview comp="card" demo="body_demo" />

### 卡片底部

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">卡片也可以有腿</p>
<FooterDemo />
<Preview comp="card" demo="footer_demo" />

### 自定义高度

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">改变自己！</p>
<HeightDemo />
<Preview comp="card" demo="height_demo" />

### 点击事件

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">改变自己！</p>
<ClickDemo />
<Preview comp="card" demo="click_demo" />

### 自定义边框

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">改变自己！</p>
<BorderDemo />
<Preview comp="card" demo="border_demo" />

### 自定义阴影

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">改变自己！</p>
<BoxShowDemo />
<Preview comp="card" demo="box_show_demo" />

### 自定义颜色

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">改变世界！</p>
<ColorDemo />
<Preview comp="card" demo="color_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">卡片的一些可控属性</p>
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
                name: 'width',
                type: 'String',
                default: '100%',
                explain: '宽度属性'
            },
            {
                name: 'height',
                type: 'String',
                default: 'auto',
                explain: '高度属性'
            },
			{
				name: 'hover-able',
				type: 'Boolean',
				default: 'false | true',
				explain: '悬浮卡片'
			},
			{
				name: 'border-color',
				type: 'String',
				default: '#d9d9d9',
				explain: '边框颜色'
			},
			{
				name: 'background-color',
				type: 'String',
				default: 'white',
				explain: '背景颜色'
			},
			{
				name: 'border-radius',
				type: 'String | Number',
				default: '4px',
				explain: '圆角'
			},
			{
				name: 'box-shadow',
				type: 'String',
				default: 'null',
				explain: '阴影'
			},
			{
				name: 'hover-box-shadow',
				type: 'String',
				default: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
				explain: '动作阴影'
			},
			{
				name: 'header-height',
				type: 'String | Number',
				default: '6vh',
				explain: '头部高度'
			},
			{
				name: 'footer-height',
				type: 'String | Number',
				default: '6vh',
				explain: '尾部高度'
			}
        ]
  }
</script>
<ApiTable :data="data" />
