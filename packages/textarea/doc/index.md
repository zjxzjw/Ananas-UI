## Textarea 文本域
<h5 style="color: #66d476">只有找到属于自己的世界，人生才有意义</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import DisabledDemo from '../demo/disabled_demo.vue'
    import MaxLengthDemo from '../demo/max_length_demo.vue'
    import ReadonlyDemo from '../demo/readonly_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import ResizeDemo from '../demo/resize_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">文本域的基本用法</p>
<BasicDemo />
<Preview comp="textarea" demo="basic_demo"/>

### 禁用状态
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">不可用的状态</p>
<DisabledDemo comp="textarea" demo="disabled_demo"/>
<Preview comp="textarea" demo="disabled_demo"/>

### 字数限制
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">不可以输入那么多～</p>
<MaxLengthDemo />
<Preview comp="textarea" demo="max_length_demo"/>

### 只读状态
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">给你看看就好</p>
<ReadonlyDemo />
<Preview comp="textarea" demo="readonly_demo"/>

### 改变尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可调节的尺寸</p>
<ResizeDemo />
<Preview comp="textarea" demo="resize_demo"/>

### 固定尺寸
<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可调节的尺寸</p>
<SizeDemo />
<Preview comp="textarea" demo="size_demo" />

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
                type: 'String | Number',
                default: 'null',
                explain: '绑定的值'
            },
            {
                name: 'placeholder',
                type: 'String',
                default: '请输入',
                explain: '默认显示'
            },
            {
                name: 'disabled',
                type: 'Boolean',
                default: 'false | true',
                explain: '禁用属性'
            },
            {
                name: 'rows',
                type: 'Number',
                default: '4',
                explain: '显示行数'
            },
            {
                name: 'cols',
                type: 'Number',
                default: '30',
                explain: '显示字数'
            },
            {
                name: 'readonly',
                type: 'Boolean',
                default: 'false | true',
                explain: '只读属性'
            },
            {
                name: 'maxlength',
                type: 'Number',
                default: '10',
                explain: '最大输入字数'
            },
            {
                name: 'resize',
                type: 'Boolean',
                default: 'false | true',
                explain: '调整尺寸'
            }
        ]
  }
</script>
<ApiTable :data="data" />
