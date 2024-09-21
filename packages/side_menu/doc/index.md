## Side Menu 侧边菜单

<h5 style="color: #66d476">我想知道流星能飞多久</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">城市的霓虹灯太闪亮~</p>
<BasicDemo />
<Preview comp="side_menu" demo="basic_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">好多属性，我好喜欢~</p>
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
                name: 'menu-items',
                type: 'Array',
                default: '[]',
                explain: '菜单数据'
            }
        ]
  }
</script>
<ApiTable :data="data" />

