import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RenderSlot',
  props: {
    slot: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    return () => {
      return props.slot
    }
  }
})