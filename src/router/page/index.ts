import { type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue'),
        children: [
            {
                path: '',
                name: 'Ananas UI',
                component: () => import('@packages/ananas/doc/index.md')
            },
            {
                path: '/logs',
                name: '更新日志',
                component: () => import('@packages/update/doc/index.md')
            },
            {
                path: '/dev',
                name: '参与开发',
                component: () => import('@packages/dev/doc/index.md')
            },
            {
                path: '/install',
                name: '安装',
                component: () => import('@packages/install/doc/index.md')
            },
            {
                path: '/fast',
                name: '快速上手',
                component: () => import('@packages/fast/doc/index.md')
            },
            {
                path: '/breadcrumb',
                name: 'Breadcrumb 面包屑',
                component: () => import('@packages/breadcrumb/doc/index.md')
            },
            {
                path: '/button',
                name: 'Button 按钮',
                component: () => import('@packages/button/doc/index.md')
            },
            {
                path: '/card',
                name: 'Card 卡片',
                component: () => import('@packages/card/doc/index.md')
            },
            {
                path: '/chart',
                name: 'Chart 图表',
                component: () => import('@packages/chart/doc/index.md')
            },
            {
                path: '/checkbox',
                name: 'Checkbox 多选',
                component: () => import('@packages/checkbox/doc/index.md')
            },
            {
                path: '/data_table',
                name: 'Data Table 数据表格',
                component: () => import('@packages/data_table/doc/index.md')
            },
            {
                path: '/ellipsis',
                name: 'Ellipsis 文本省略',
                component: () => import('@packages/ellipsis/doc/index.md')
            },
            {
                path: '/icon',
                name: 'Icon 图标',
                component: () => import('@packages/icon/doc/index.md')
            },
            {
                path: '/image',
                name: 'Image 图片',
                component: () => import('@packages/image/doc/index.md')
            },
            {
                path: '/input',
                name: 'Input 输入框',
                component: () => import('@packages/input/doc/index.md')
            },
            {
                path: '/message',
                name: 'Message 消息',
                component: () => import('@packages/message/doc/index.md')
            },
            {
                path: '/model',
                name: 'Model 模型框',
                component: () => import('@packages/model/doc/index.md')
            },
            {
                path: '/notification',
                name: 'Notification 通知',
                component: () => import('@packages/notification/doc/index.md')
            },
            {
                path: '/tooltip',
                name: 'Tooltip 文字提示',
                component: () => import('@packages/Tooltip/doc/index.md')
            },
            {
                path: '/loading',
                name: 'Loading 加载',
                component: () => import('@packages/loading/doc/index.md')
            },
            {
                path: '/numberAnimation',
                name: 'Number Animation 数值动画',
                component: () => import('@packages/number_animation/doc/index.md')
            },
            {
                path: '/radio',
                name: 'Radio 单选',
                component: () => import('@packages/radio/doc/index.md')
            },
            {
                path: '/select',
                name: 'Select 选择器',
                component: () => import('@packages/select/doc/index.md')
            },
            {
                path: '/side_menu',
                name: 'Side Menu 侧边菜单',
                component: () => import('@packages/side_menu/doc/index.md')
            },
            {
                path: '/space',
                name: 'Space 间距',
                component: () => import('@packages/space/doc/index.md')
            },
            {
                path: '/table',
                name: 'Table 表格',
                component: () => import('@packages/table/doc/index.md')
            },
            {
                path: '/tabs',
                name: 'Tabs 标签页',
                component: () => import('@packages/tabs/doc/index.md')
            },
            {
                path: '/tag',
                name: 'Tag 标签',
                component: () => import('@packages/tag/doc/index.md')
            },
            {
                path: '/textarea',
                name: 'Textarea 文本域',
                component: () => import('@packages/textarea/doc/index.md')
            },
            {
                path: '/tree',
                name: 'Tree 树',
                component: () => import('@packages/tree/doc/index.md')
            },
            {
                path: '/table',
                name: 'Table 表格',
                component: () => import('@packages/table/doc/index.md')
            },
            {
                path: '/abc',
                name: '持续更新中~',
                component: () => import('@packages/dev/doc/index.md')
            }
        ]
    },
    {
        path: '/ananas',
        name: 'Ananas',
        component: () => import('@/views/index.vue')
    }
] as RouteRecordRaw[]
