## Card 卡片
<h5 style="color: #66d476">等到秋叶终于金黄，等到华发悄然苍苍</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import HoverableDemo from '../demo/hoverable_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import BodyDemo from '../demo/body_demo.vue'
    import FooterDemo from '../demo/footer_demo.vue'
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
				name: 'hoverable',
				type: 'Boolean',
				default: 'false | true',
				explain: '悬浮卡片'
			}
        ]
  }
</script>
<ApiTable :data="data" />
