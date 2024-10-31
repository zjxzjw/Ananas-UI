<template>
  <NavBar/>
  <div class="context">
    <div class="title">
      <span class="title_ananas">Ananas</span>
      <span class="title_ui"> UI</span>
    </div>
    <div class="tip"><!--等到秋叶终于金黄，等到华发悄然苍苍-->
      <Typewriter :texts="['在我们相遇之前，是否把时钟拨快一点', '你说把爱渐渐放下会走更远', '微风需要竹林，溪流需要蜻蜓','数不清是第几次穿越银河，才在尽头和你邂逅']"/>
    </div>
    <div class="text">一个看起来像热带水果风味的 Vue3 UI组件库</div>

    <div class="button">
      <an-space>
        <router-link to="/fast">
          <an-button type="primary" transform="scale(1.1)">
            快速上手
          </an-button>
        </router-link>
        <an-button type="success" transform="scale(1.1)" @click="toGitHub">
          GitHub
        </an-button>
      </an-space>
    </div>
    <div class="footer">
      <!-- 放置备案号的div -->
        <a href="https://beian.miit.gov.cn/" target="_blank" style="color: #ffcf3f; font-size: 14px; text-decoration: none">&copy; 小菠萝 2024 赣ICP备2024043107号</a>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/nav_bar.vue";
import Typewriter from "@/components/typewriter.vue";

const toGitEE = () => {
  window.open("https://gitee.com/zjxzjw/ananas-ui", "_blank");
};

const toGitHub = () => {
  window.open("https://github.com/zjxzjw/Ananas-UI", "_blank");
};
</script>

<style lang="scss" scoped>
.context {
  text-align: center;
  position: relative;
  top: 6.5rem;
}

.title {
  font-size: 6rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    animation: max 0.7s infinite;
  }
}

.title_ananas {
  color: #ffcf3f;
  //text-shadow: 0 10px 20px #ffcf3f;
}

.title_ui {
  color: #66d476;
  //text-shadow: 0 0 100px #66d476;
}

.text {
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 900;
}

.tip {
  margin-top: 1rem;
  color: #66d476;
  height: 1rem;
}

.button {
  margin-top: 1rem;
}

.footer {
  margin-top: 3rem;
}

/*@keyframes max {
		0% {
			//transform: scale(1);
		}

		50% {
			transform: translate(15px, -15px);
			//transform: scale(1.1);
		}

		100% {
			//transform: scale(1);
		}
	}*/
</style>
