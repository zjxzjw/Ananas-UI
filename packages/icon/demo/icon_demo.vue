<template>
  <div class="an-icon-demo-container">
    <div class="an-icon-box" @click="handleClick" v-for="item in data" :key="item">
      <an-icon :name="item" />
      <div class="an-icon-name">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnNotification } from "@packages/notification/index.js";
// 点击box获取当前icon下面的div的内容
const handleClick = (e: Event) => {
  const target = e.target as HTMLElement;
  // 放入系统剪切板
  copyText(target.innerText);
};

function copyText(text: string) {
  if (navigator.clipboard) {
    copyText = (text) => {
      navigator.clipboard.writeText(text);

      AnNotification({
        message: '复制成功',
        title: 'success',
        type: "success"
      })
    };
  } else {
    copyText = (text) => {
      const input = document.createElement("input");
      input.setAttribute("value", text);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);

      AnNotification({
        message: '复制成功',
        title: 'success',
        type: "success"
      })
    };
  }
  copyText(text);
}

const data = ref([
  "minus-circle",
  "microphone-mute",
  "minimize",
  "monitor-1",
  "monitor",
  "mouse",
  "music",
  "pause",
  "paintbucket",
  "moon",
  "percentage",
  "phone",
  "phone-call-cross",
  "phone-call",
  "photo",
  "phone-call-forward",
  "picture-in-picture",
  "pill",
  "phone-call-hang-up",
  "pin-tack",
  "pin",
  "plus-circle",
  "plus",
  "play",
  "pie-chart",
  "print",
  "plug",
  "projector",
  "redo",
  "refresh",
  "rewind",
  "router",
  "search",
  "scissors",
  "rows",
  "send",
  "server",
  "share",
  "settings-sliders",
  "share",
  "shopping-bag",
  "shield-cross",
  "shield-tick",
  "phone-call-outgoing",
  "shopping-basket",
  "settings",
  "skip-back",
  "shield-warning",
  "skip-forward",
  "shopping-cart",
  "star",
  "spinner",
  "sticker",
  "stream-to-tv",
  "smartphone",
  "speaker",
  "table-columns",
  "sun",
  "shield",
  "table-rows",
  "tablet",
  "phone-call-incoming",
  "target",
  "stop",
  "trash",
  "ticket",
  "tag",
  "truck",
  "trending-up",
  "undo",
  "union",
  "users",
  "users-plus",
  "video",
  "users-minus",
  "video-camera-off",
  "video-camera",
  "wallet",
  "warning-triangle",
  "virus",
  "wifi",
  "zoom-out",
  "zoom-in",
  "zip-file",
  "wifi-no-connection",
  "arrow-left",
  "arrow-down-left",
  "arrow-up-right",
  "arrow-up",
  "badge",
  "battery-full",
  "battery-low",
  "bank",
  "battery-charging",
  "battery-medium",
  "bell",
  "arrow-right",
  "bookmark",
  "arrow-up-left",
  "box",
  "briefcase",
  "broadcast",
  "book",
  "building",
  "calendar-minus",
  "bell-off",
  "calendar",
  "calendar-plus",
  "building-store",
  "camera-off",
  "camera",
  "check",
  "chevron-down",
  "chevron-left",
  "chart",
  "chevron-right",
  "check-circle",
  "close",
  "clock",
  "clipboard",
  "cloud",
  "close-circle",
  "code",
  "chevron-up",
  "columns-horizontal",
  "columns",
  "columns-vertical",
  "copy",
  "cursor",
  "cpu",
  "dashboard",
  "crop",
  "dollar",
  "dots-vertical",
  "dots-horizontal",
  "dots",
  "download",
  "edit",
  "eye",
  "eye-off",
  "file-minus",
  "file",
  "emoji-happy",
  "fast-forward",
  "film",
  "file-text",
  "filter",
  "file-plus",
  "face-id",
  "emoji-sad",
  "floppy-disc",
  "folder",
  "folder-minus",
  "folder-plus",
  "grid-masonry",
  "hard-drive",
  "flag",
  "hashtag",
  "heart",
  "headphones",
  "grid",
  "help",
  "globe",
  "indent-left",
  "home",
  "inbox",
  "key",
  "information",
  "indent-right",
  "mail",
  "help-circle",
  "keyboard",
  "layers",
  "link",
  "lock",
  "log-in",
  "log-out",
  "mail",
  "lock-unlocked",
  "maximize",
  "menu",
  "map",
  "message",
  "microphone",
  "minus",
  "airplay-to-tv",
  "annotation-dots",
  "archive",
  "arrow-down",
  "arrow-down-right",
  "announcement",
  "at-sign",
  "battery",
  "annotation-warning",
]);
</script>

<style lang="scss" scoped>
.an-icon-demo-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;
  list-style: none;

  .an-icon-box {
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    color: #625c5c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px #ccc;
      transition: all 0.5s;
    }

    .an-icon-name {
      white-space: nowrap;
    }
  }
}
</style>
