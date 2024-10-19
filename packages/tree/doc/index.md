## Tree 树

<h5 style="color: #66d476">再快的86也追不上奔驰</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import ColorDemo from '../demo/color_demo.vue'
    import NoneHeaderDemo from '../demo/none_header_demo.vue'
    import OverflowDemo from '../demo/overflow_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 一颗基本的树，不是夏树！</p>
<BasicDemo />
<Preview comp="tree" demo="basic_demo" />

### 隐藏序号

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 一颗没有序号的树</p>
<NoneHeaderDemo />
<Preview comp="tree" demo="none_header_demo" />

### 滚动的树

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># BUG较大！ 暂时不支持</p>
<!--<OverflowDemo />-->
<Preview comp="tree" demo="overflow_demo" />

### 自定义颜色

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 额，看起来颜色并不搭</p>
<ColorDemo />
<Preview comp="tree" demo="color_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">MysqlB+树啥啥啥，糟了忘记了</p>
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
                explain: '内容数据'
            },
            {
                name: 'none-header',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否有序号'
            },
            {
                name: 'number-color',
                type: 'String',
                default: '#ffcf3f',
                explain: '序号颜色'
            },
            {
                name: 'text-color',
                type: 'String',
                default: 'black',
                explain: '文本颜色'
            },
            {
                name: 'height',
                type: 'String',
                default: '100%',
                explain: '高度属性'
            }
        ]
  }
</script>
<ApiTable :data="data" />
