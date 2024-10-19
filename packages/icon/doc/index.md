## Icon 图标
<h5 style="color: #66d476">流星在下坠，记忆在消退</h5>

<script setup>
import BasicDemo from '../demo/basic_demo.vue'
import ColorDemo from '../demo/color_demo.vue'
import IconDemo from '../demo/icon_demo.vue'
import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 图标的基本用法~</p>
<BasicDemo />
<Preview comp="icon" demo="basic_demo" />

### 自定义颜色
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 换个颜色看看~</p>
<ColorDemo />
<Preview comp="icon" demo="color_demo" />

### 图标库
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 已支持200+图标，持续更新中~</p>
<IconDemo />

<!-- API表格 -->
### API 属性
<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">图标相关的属性~</p>
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
                name: 'name',
                type: 'String',
                default: 'null',
                explain: '图标名称'
            },
            {
                name: 'size',
                type: 'String',
                default: '1em',
                explain: '图标尺寸'
            },
            {
                name: 'color',
                type: 'String',
                default: 'null',
                explain: '颜色'
            }
        ]
  }
</script>
<ApiTable :data="data" />
