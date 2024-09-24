import { onBeforeUnmount, onMounted, Ref } from "vue";

export const useClickOutside = (
  target: Ref<HTMLElement | null>,
  cb: (event: MouseEvent) => void,
) => {
  const handler = (e: MouseEvent) => {
    if (target.value && !target.value.contains(e.target as HTMLElement)) {
      cb(e);
    }
  }

  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("click", handler);
  });
}