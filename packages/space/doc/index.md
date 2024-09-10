## Space 间距
<h5 style="color: #66d476">你站的方位，跟我中间隔着泪。</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import ArrayDemo from '../demo/array_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">基本间距！</p>
<BasicDemo />
<Preview comp="space" demo="basic_demo"/>

### 排列
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">也可以竖着的！</p>
<ArrayDemo />
<Preview comp="space" demo="array_demo"/>

### 尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">别离我太远</p>
<SizeDemo />
<Preview comp="space" demo="size_demo"/>

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
                name: 'inline',
                type: 'Boolean',
                default: 'false | true',
                explain: '排列方式'
            },
            {
                name: 'size',
                type: 'Array',
                default: '[10,10]',
                explain: '距离属性'
            }
        ]
  }
</script>
<ApiTable :data="data" />

<!-- 底部导航 -->
<script setup>
    import BottomTabs from '../../../src/components/bottom_tabs.vue'
</script>

<BottomTabs up="Tag" down="Button" />
