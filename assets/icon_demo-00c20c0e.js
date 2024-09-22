const n=`<template>\r
  <div class="an-icon-demo-container">\r
    <div class="an-icon-box" @click="handleClick" v-for="item in data" :key="item">\r
      <an-icon :name="item" />\r
      <div class="an-icon-name">{{ item }}</div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import AnMessage from "../../message/index.js";\r
// 点击box获取当前icon下面的div的内容\r
const handleClick = (e: Event) => {\r
  const target = e.target as HTMLElement;\r
  // 放入系统剪切板\r
  copyText(target.innerText);\r
};\r
\r
function copyText(text: string) {\r
  if (navigator.clipboard) {\r
    copyText = (text) => {\r
      navigator.clipboard.writeText(text);\r
      AnMessage({\r
        message: "复制成功!",\r
        type: "success",\r
      });\r
    };\r
  } else {\r
    copyText = (text) => {\r
      const input = document.createElement("input");\r
      input.setAttribute("value", text);\r
      document.body.appendChild(input);\r
      input.select();\r
      document.execCommand("copy");\r
      document.body.removeChild(input);\r
      AnMessage({\r
        message: "复制成功!",\r
        type: "success",\r
      });\r
    };\r
  }\r
  copyText(text);\r
}\r
\r
const data = ref([\r
  "minus-circle",\r
  "microphone-mute",\r
  "minimize",\r
  "monitor-1",\r
  "monitor",\r
  "mouse",\r
  "music",\r
  "pause",\r
  "paintbucket",\r
  "moon",\r
  "percentage",\r
  "phone",\r
  "phone-call-cross",\r
  "phone-call",\r
  "photo",\r
  "phone-call-forward",\r
  "picture-in-picture",\r
  "pill",\r
  "phone-call-hang-up",\r
  "pin-tack",\r
  "pin",\r
  "plus-circle",\r
  "plus",\r
  "play",\r
  "pie-chart",\r
  "print",\r
  "plug",\r
  "projector",\r
  "redo",\r
  "refresh",\r
  "rewind",\r
  "router",\r
  "search",\r
  "scissors",\r
  "rows",\r
  "send",\r
  "server",\r
  "share",\r
  "settings-sliders",\r
  "share",\r
  "shopping-bag",\r
  "shield-cross",\r
  "shield-tick",\r
  "phone-call-outgoing",\r
  "shopping-basket",\r
  "settings",\r
  "skip-back",\r
  "shield-warning",\r
  "skip-forward",\r
  "shopping-cart",\r
  "star",\r
  "spinner",\r
  "sticker",\r
  "stream-to-tv",\r
  "smartphone",\r
  "speaker",\r
  "table-columns",\r
  "sun",\r
  "shield",\r
  "table-rows",\r
  "tablet",\r
  "phone-call-incoming",\r
  "target",\r
  "stop",\r
  "trash",\r
  "ticket",\r
  "tag",\r
  "truck",\r
  "trending-up",\r
  "undo",\r
  "union",\r
  "users",\r
  "users-plus",\r
  "video",\r
  "users-minus",\r
  "video-camera-off",\r
  "video-camera",\r
  "wallet",\r
  "warning-triangle",\r
  "virus",\r
  "wifi",\r
  "zoom-out",\r
  "zoom-in",\r
  "zip-file",\r
  "wifi-no-connection",\r
  "arrow-left",\r
  "arrow-down-left",\r
  "arrow-up-right",\r
  "arrow-up",\r
  "badge",\r
  "battery-full",\r
  "battery-low",\r
  "bank",\r
  "battery-charging",\r
  "battery-medium",\r
  "bell",\r
  "arrow-right",\r
  "bookmark",\r
  "arrow-up-left",\r
  "box",\r
  "briefcase",\r
  "broadcast",\r
  "book",\r
  "building",\r
  "calendar-minus",\r
  "bell-off",\r
  "calendar",\r
  "calendar-plus",\r
  "building-store",\r
  "camera-off",\r
  "camera",\r
  "check",\r
  "chevron-down",\r
  "chevron-left",\r
  "chart",\r
  "chevron-right",\r
  "check-circle",\r
  "close",\r
  "clock",\r
  "clipboard",\r
  "cloud",\r
  "close-circle",\r
  "code",\r
  "chevron-up",\r
  "columns-horizontal",\r
  "columns",\r
  "columns-vertical",\r
  "copy",\r
  "cursor",\r
  "cpu",\r
  "dashboard",\r
  "crop",\r
  "dollar",\r
  "dots-vertical",\r
  "dots-horizontal",\r
  "dots",\r
  "download",\r
  "edit",\r
  "eye",\r
  "eye-off",\r
  "file-minus",\r
  "file",\r
  "emoji-happy",\r
  "fast-forward",\r
  "film",\r
  "file-text",\r
  "filter",\r
  "file-plus",\r
  "face-id",\r
  "emoji-sad",\r
  "floppy-disc",\r
  "folder",\r
  "folder-minus",\r
  "folder-plus",\r
  "grid-masonry",\r
  "hard-drive",\r
  "flag",\r
  "hashtag",\r
  "heart",\r
  "headphones",\r
  "grid",\r
  "help",\r
  "globe",\r
  "indent-left",\r
  "home",\r
  "inbox",\r
  "key",\r
  "information",\r
  "indent-right",\r
  "mail",\r
  "help-circle",\r
  "keyboard",\r
  "layers",\r
  "link",\r
  "lock",\r
  "log-in",\r
  "log-out",\r
  "mail",\r
  "lock-unlocked",\r
  "maximize",\r
  "menu",\r
  "map",\r
  "message",\r
  "microphone",\r
  "minus",\r
  "airplay-to-tv",\r
  "annotation-dots",\r
  "archive",\r
  "arrow-down",\r
  "arrow-down-right",\r
  "announcement",\r
  "at-sign",\r
  "battery",\r
  "annotation-warning",\r
]);\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.an-icon-demo-container {\r
  display: grid;\r
  grid-template-columns: repeat(10, 1fr);\r
  gap: 1rem;\r
  list-style: none;\r
\r
  .an-icon-box {\r
    height: 80px;\r
    border: 1px solid #ccc;\r
    border-radius: 0.5rem;\r
    color: #625c5c;\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 0.5rem;\r
    cursor: pointer;\r
\r
    &:hover {\r
      transform: scale(1.1);\r
      box-shadow: 0 0 10px #ccc;\r
      transition: all 0.5s;\r
    }\r
\r
    .an-icon-name {\r
      white-space: nowrap;\r
    }\r
  }\r
}\r
</style>\r
`;export{n as default};
