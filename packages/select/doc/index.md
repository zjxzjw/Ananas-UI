## Select 选择器
<h5 style="color: #66d476">这么多选择，偏偏选择了你</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import DefaultOptionDemo from '../demo/default_option_demo.vue'
    import DisabledDemo from '../demo/disabled_demo.vue'
    import DisabledItemDemo from '../demo/disabled_item_demo.vue'
    import DataDemo from '../demo/data_demo.vue'
    import ChangeDemo from '../demo/change_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">选择器的基本用法</p>
<BasicDemo />
<Preview comp="select" demo="basic_demo" />

### 默认选择
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以设置默认选择的</p>
<DefaultOptionDemo />
<Preview comp="select" demo="default_option_demo" />

### 禁用状态
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">不许点！</p>
<DisabledDemo />
<Preview comp="select" demo="disabled_demo" />

### 选项禁用
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">这个也不行！</p>
<DisabledItemDemo />
<Preview comp="select" demo="disabled_item_demo" />

### 尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">还不可以自定义尺寸～</p>
<SizeDemo />
<Preview comp="select" demo="size_demo" />

### 自定义数据格式
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">帅气的Java后端会传来各种各样的数据</p>
<DataDemo />
<Preview comp="select" demo="data_demo" />

### 回调事件
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">选择之后触发</p>
<ChangeDemo />
<Preview comp="select" demo="change_demo" />

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
                name: 'options',
                type: 'Array',
                default: '[]',
                explain: '选项数据'
            },
            {
                name: 'disabled',
                type: 'Boolean',
                default: 'false | true',
                explain: '是否禁用'
            },
            {
                name: 'filed-label',
                type: 'String',
                default: 'label',
                explain: '选项名称'
            },
            {
                name: 'filed-value',    
                type: 'String',
                default: 'value',
                explain: '数据名称'
            },
            {
                name: 'placeholder',
                type: 'String',
                default: '请选择',
                explain: '默认显示'
            },
            {
                name: 'model-value',
                type: 'String',
                default: '#ffcf3f',
                explain: '背景颜色属性'
            },
            {
                name: 'size',
                type: 'String',
                default: 'default | small | large',
                explain: '尺寸属性'
            },
            {
                name: '@change',
                type: 'function',
                default: 'null',
                explain: '回调事件属性'
            },
        ]
  }
</script>
<ApiTable :data="data" />
