## Table 表格
<h5 style="color: #66d476">令人头大的Excel</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import BorderDemo from '../demo/border_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import ItemAlignDemo from '../demo/item_align_demo.vue'
    import CustomDemo from '../demo/custom_demo.vue'
    import CustomTitleDemo from '../demo/custom_title_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">一个基本的表格</p>
<BasicDemo />
<Preview comp="table" demo="basic_demo"/>

### 带边框表格
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">有边框的表格</p>
<BorderDemo />
<Preview comp="table" demo="border_demo"/>

### 自定义插槽
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以用来放一些操作按钮</p>
<CustomDemo />
<Preview comp="table" demo="custom_demo"/>

### 自定义尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">金箍棒，大 大 大 大</p>
<SizeDemo />
<Preview comp="table" demo="size_demo"/>

### 自定义内容位置
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以选择内容位置</p>
<ItemAlignDemo />
<Preview comp="table" demo="item_align_demo"/>

### 自定义标题栏
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">换一个颜色看看</p>
<CustomTitleDemo />
<Preview comp="table" demo="custom_title_demo"/>

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
                name: 'data',
                type: 'Array',
                default: '[]',
                explain: '内容数据'
            },
            {
                name: 'width',
                type: 'String',
                default: '100%',
                explain: '宽度属性'
            },
            {
                name: 'table-height',
                type: 'String',
                default: 'auto',
                explain: '高度属性'
            },
            {
                name: 'align',
                type: 'String',
                default: 'center',
                explain: '对齐方式'
            },
            {
                name: 'custom',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否自定义'
            },
            {
                name: 'border',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否有边框'
            },
            {
                name: 'head-color',
                type: 'String',
                default: 'white',
                explain: '标题栏文字颜色'
            },
            {
                name: 'head-background',
                type: 'String',
                default: 'white',
                explain: '标题栏背景颜色'
            }
        ]
  }
</script>
<ApiTable :data="data" />
