## Number Animation 数值动画

<h5 style="color: #66d476">在我们相遇之前，是否把时间拨快一点</h5>

<script setup>
    import BasicDemo from "../demo/basic_demo.vue"
    import SizeDemo from "../demo/size_demo.vue"
    import TimeDemo from "../demo/time_demo.vue"
    import Preview from '../../../src/components/preview.vue'
</script>

### 基本用法

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">再给我两分钟</p>
<BasicDemo />
<Preview comp="number_animation" demo="basic_demo"/>

### 时间

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">可以将时间调成很慢很慢很慢很慢很慢~</p>
<TimeDemo />
<Preview comp="number_animation" demo="time_demo"/>

### 尺寸

<p style="color: #ffcf3f; font-size: 12px; font-weight: 900;">大，大，大</p>
<SizeDemo />
<Preview comp="number_animation" demo="size_demo"/>

<!-- API表格 -->

### API 属性

<p style="color: var(--color-success); font-size: 14px; font-weight: 900;">数值动画组件可控属性~</p>
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
                name: 'num',
                type: 'Number',
                default: '0',
                explain: '展示内容'
            },
            {
                name: 'duration',
                type: 'Number',
                default: '1',
                explain: '滚动速度'
            },
            {
                name: 'size',
                type: 'String',
                default: '24px',
                explain: '字体大小'
            }
        ]
  }
</script>
<ApiTable :data="data" />
