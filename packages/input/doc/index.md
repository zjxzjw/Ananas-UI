## Input 输入框

<h5 style="color: #66d476">人最重要的是找到属于自己的世界</h5>

<script setup>
    import BasicDemo from '../demo/basic_demo.vue'
    import IconDemo from '../demo/icon_demo.vue'
    import DisabledDemo from '../demo/disabled_demo.vue'
    import RoundDemo from '../demo/round_demo.vue'
    import PasswordDemo from '../demo/password_demo.vue'
    import SizeDemo from '../demo/size_demo.vue'
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">输入框的基本用法</p>
<BasicDemo />
<Preview comp="input" demo="basic_demo" />

### 图标用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">输入框的图标用法</p>
<IconDemo />
<Preview comp="input" demo="icon_demo" />

### 禁用状态

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">输入框输入可以禁用</p>
<DisabledDemo />
<Preview comp="input" demo="disabled_demo" />

### 尺寸

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以选择四种尺寸的输入框</p>
<SizeDemo />
<Preview comp="input" demo="size_demo" />

### 圆角

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">看起来也不错</p>
<RoundDemo />
<Preview comp="input" demo="round_demo" />

### 输入密码

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">一定要偷偷的</p>
<PasswordDemo />
<Preview comp="input" demo="password_demo" />

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">太多了就要溢出来了！</p>
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
                name: 'round',
                type: 'Boolean',
                default: 'false | true',
                explain: '圆角属性'
            },
            {
                name: 'password',
                type: 'Boolean',
                default: 'null',
                explain: '密码属性'
            },
            {
                name: 'size',
                type: 'String',
                default: 'small | medium | large | large-max',
                explain: '背景颜色属性'
            }
        ]
  }
</script>
<ApiTable :data="data" />
