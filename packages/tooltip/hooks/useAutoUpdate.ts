import { autoUpdate } from "@floating-ui/dom";
import { onMounted, onUnmounted, Ref } from "vue";

export const useAutoUpdate = (
  hostRef: Ref<HTMLElement | null>,
  floatingRef: Ref<HTMLElement | null>,
  updatePosition: () => void
) => {
  let cleanup: () => void | undefined;
  onMounted(() => {
    cleanup = autoUpdate(hostRef.value!, floatingRef.value!, updatePosition)
  })
  onUnmounted(() => {
    cleanup?.()
  })
}
