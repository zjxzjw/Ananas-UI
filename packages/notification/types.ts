import { Ref } from "vue"

export const notificationPositions = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left'
] as const

export const notificationTypes = [
  'success',
  'warning',
  'info',
  'error',
  ''
] as const

export type NotificationPosition = (typeof notificationPositions)[number]
export type NotificationType = (typeof notificationTypes)[number]

export type ANotificationOptions = {
  title?: string
  message?: string
  icon?: string
  type?: NotificationType
  duration?: number
  position?: NotificationPosition
  offset?: number
  hideClose?: boolean
}

export type ANotificationProps = ANotificationOptions & {
  id: string
  visible: Ref<boolean>
  onDestroy: (id: string) => void
  toggleVisible: (val: boolean) => void
}