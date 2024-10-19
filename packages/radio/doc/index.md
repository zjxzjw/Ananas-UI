## Radio 单选

<h5 style="color: #66d476">苦酒折柳今相离，无风无月也无你</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import DisabledDemo from '../demo/disabled_demo.vue'
    import DefaultPoint from '../demo/default_point_demo.vue'
    import CustomColor from '../demo/custom_color_demo.vue'
    import ArrayDemo from '../demo/array_demo.vue'
    import preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 这是一个单选按钮组</p>
<BasicDemo />
<preview comp="radio" demo="basic_demo"/>

### 禁用状态

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 不许点！</p>
<DisabledDemo />
<preview comp="radio" demo="disabled_demo"/>

### 自定义颜色

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 绿色是春天的颜色</p>
<CustomColor />
<preview comp="radio" demo="custom_color_demo"/>

### 排列

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 提供了两种排列方式</p>
<ArrayDemo />
<preview comp="radio" demo="array_demo"/>

### 默认选择

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;"># 默默的选择了你</p>
<DefaultPoint />
<preview comp="radio" demo="default_point_demo"/>

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">一生中会经历无数次选择，屏幕前的你，加油！！！</p>
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
                explain: '单选的选项数据'
            },
            {
                name: 'inline',
                type: 'Boolean',
                default: 'false | true',
                explain: '排列方式属性'
            },
            {
                name: 'filed-label',
                type: 'String',
                default: 'label',
                explain: '选项属性名'
            },
            {
                name: 'filed-value',
                type: 'String',
                default: 'value',
                explain: '选项数据名'
            },
            {
                name: 'custom-color',
                type: 'String',
                default: '#ffcf3f',
                explain: '选中的颜色'
            },
            {
                name: 'radio-index',
                type: 'Number',
                default: '-1',
                explain: '默认选中'
            },
        ]
  }
</script>
<ApiTable :data="data" />
