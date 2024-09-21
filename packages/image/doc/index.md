## Image 图片

<h5 style="color: #66d476">手牵手一步两步三步四步望着天</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import FillDemo from '../demo/fill_demo.vue'
    import PreViewDemo from '../demo/preview_demo.vue'
    import LazyDemo from '../demo/lazy_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">图片往往比文字更能传递信息</p>
<BasicDemo />
<Preview comp="image" demo="basic_demo" />

### 填充模式

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">回忆的画面，在荡着秋千，梦开始不甜</p>
<FillDemo />
<Preview comp="image" demo="fill_demo" />

### 预览模式

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">更喜欢大一点~</p>
<PreViewDemo />
<Preview comp="image" demo="preview_demo" />

### 懒加载

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">懒懒的~~</p>
<LazyDemo />
<Preview comp="image" demo="lazy_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">看星星一颗两颗三颗四颗连成线~</p>
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
                name: 'images',
                type: 'Array',
                default: 'null',
                explain: '图片数组'
            },
            {
                name: 'alt',
                type: 'String',
                default: 'null',
                explain: '图片描述'
            },
            {
                name: 'width',
                type: 'String || Number',
                default: '100vw',
                explain: '宽度'
            },
            {
                name: 'height',
                type: 'String || Number',
                default: '100vw',
                explain: '高度'
            },
            {
                name: 'error-src',
                type: 'String',
                default: 'null',
                explain: '载入错误'
            },
            {
                name: 'object-fit',
                type: 'String',
                default: 'fill | contain | cover | none | scale-down',
                explain: '填充模式'
            },
            {
                name: 'lazy',
                type: 'String',
                default: 'false',
                explain: '懒加载模式'
            },
            {
                name: 'preview-enabled',
                type: 'String',
                default: 'false',
                explain: '预览模式'
            }
        ]
  }
</script>
<ApiTable :data="data" />




