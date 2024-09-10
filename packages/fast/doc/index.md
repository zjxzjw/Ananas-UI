## 快速上手
<h5 style="color: #66d476">你转身向北，侧脸还是很美。</h5>

###### 本节将介绍如何在项目中使用 Ananas UI

#### 1. 安装 Ananas UI

<span>
    <highlightjs lang="bash" code="npm install ananas-ui -D">
</span>

#### 2. 引入组件和样式

<span>
    <highlightjs lang="javascript" code="import Ananas from 'ananas-ui'">
</span>

<span>
<highlightjs lang="css" code="import 'ananas-ui/dist/style.css'">
</span>

#### 3. 开始使用
###### 至此，一个基于 Vue 和 Ananas UI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档

<!-- 底部导航 -->
<script setup>
    import BottomTabs from '../../../src/components/bottom_tabs.vue'
</script>

<BottomTabs up="Install" down="Tag" />
