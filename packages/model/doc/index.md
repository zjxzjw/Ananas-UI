## Model 模型框
<h5 style="color: #66d476">白茶清欢无别事,我在等风也等你</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import CustomColorDemo from '../demo/custom_color_demo.vue'
    import AlignDemo from '../demo/align_demo.vue'
    import TransitionDemo from '../demo/transition_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import SlotDemo from '../demo/slot_demo.vue'
    import preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">模型框的基本用法</p>
<BasicDemo />
<preview comp="model" demo="basic_demo"/>

### 尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">模型框的基本用法</p>
<SizeDemo />
<preview comp="model" demo="size_demo"/>

### 动画效果
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">模型框的基本用法</p>
<TransitionDemo />
<preview comp="model" demo="transition_demo"/>

### 对齐方式
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">左左右右上上下下BABA！</p>
<AlignDemo />
<preview comp="model" demo="align_demo"/>

### 自定义颜色
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">彩虹模态框，好像不太搭~</p>
<CustomColorDemo />
<preview comp="model" demo="custom_color_demo"/>

### 自定义内容
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以放点有意思的东西~</p>
<SlotDemo />
<preview comp="model" demo="slot_demo"/>


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
                name: 'model-value',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否显示'
            },
            {
                name: 'transition-name',
                type: 'String',
                default: 'modal | fade-modal | slide-modal | slide-left-modal | slide-right-modal | zoom-modal',
                explain: '动画名称'
            },
            {
                name: 'width',
                type: 'String | Number',
                default: '400px',
                explain: '宽度'
            },
{
                name: 'height',
                type: 'String | Number',
                default: '400px',
                explain: '高度'
            },
            {
                name: 'footer-align',
                type: 'Boolean',
                default: 'left | center | right',
                explain: '底部对齐方式'
            },
            {
                name: 'header-color',
                type: 'String',
                default: '#42b983',
                explain: '标题颜色'
            },
            {
                name: 'body-color',
                type: 'String',
                default: '#333',
                explain: '内容颜色'
            }
        ]
  }
</script>
<ApiTable :data="data" />
