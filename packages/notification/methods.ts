import { h, ref, render, shallowReactive, nextTick } from "vue"
import { ANotificationOptions, ANotificationProps, NotificationPosition, notificationPositions } from "./types"
import Notification from './Notification.vue'

let seed = 0

const defaultOptions: ANotificationOptions = {
  title: '',
  message: '',
  icon: '',
  type: '',
  duration: 5000,
  position: 'top-right',
  offset: 30,
  hideClose: false
}

// 初始化一个Map，用于存储不同位置的通知
const notificationMap = new Map()
notificationPositions.forEach(position => {
  notificationMap.set(position, shallowReactive([]))
})

const normalizeOptions = (options: ANotificationOptions) => {
  return {
    ...defaultOptions,
    ...options
  }
}

export const getLastOffsetBottom = (position: NotificationPosition, id: string) => {
  const positionMap = notificationMap.get(position)
  const index = positionMap.findIndex(item => item.id === id)
  if(index <= 0) return 0
  return positionMap[index - 1].vm.exposed.offsetBottom.value
}

const createNotification = (options: ANotificationOptions) => {
  seed++
  const visible = ref(false)
  const onDestroy = (id: string) => {
    const positionMap = notificationMap.get(options.position)
    positionMap.forEach((item, index) => {
      if (item.id === id) {
        positionMap.splice(index, 1)
      }
    })
    render(null,container)
  }
  const _props: ANotificationProps = {
    ...options,
    id: `an-notification-${seed}`,
    visible,
    toggleVisible: (val: boolean) => {
      visible.value = val
    },
    onDestroy
  }
  const vNode = h(Notification, _props)
  const container = document.createElement('div')
  render(vNode, container)
  const vm = vNode.component!
  document.body.appendChild(container.firstElementChild!)
  const instance = {
    vNode,
    id: `an-notification-${seed}`,
    vm,
    close: () => {
      visible.value = false
    }
  }
  nextTick(() => visible.value = true)
  const positionMap = notificationMap.get(options.position)
  positionMap.push(instance)

  return instance
}

export const notification = (options: ANotificationOptions) => {
  // 标准化参数
  const normalizedOptions = normalizeOptions(options)
  const instance = createNotification(normalizedOptions)
  return instance
}