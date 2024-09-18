<template>
  <div class="an-image-box" v-for="(imageSrc, index) in images" :key="index" :class="{ 'is-error': errors[index] }">
    <img
        :src="currentSrc(index)"
        :alt="alt"
        :width="width"
        :height="height"
        :style="imageStyle(index)"
        @load="handleLoad(index)"
        @error="handleError(index)"
        class="an-image"
        @click="previewEnabled && (showPreview = index)"
        :srcset="lazy ? `${imageSrc}?${Date.now()}` : undefined"
        :loading="lazy ? 'lazy' : undefined"
    >
    <div v-if="loadings[index]" class="loading-mask">
      <an-icon name="spinner"/>
    </div>
    <!-- Modal -->
    <transition name="fade">
      <div v-if="previewEnabled && showPreview >= 0" class="modal" @click.self="showPreview = -1">
        <img :src="images[currentIndex]" alt="" @click="showPreview = -1">
        <button @click="prevImage" class="prev-button">
          <an-icon name="arrow-left"/>
        </button>
        <button @click="nextImage" class="next-button">
          <an-icon name="arrow-right"/>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, watch, computed, reactive, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AnImage',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: "100vw"
    },
    height: {
      type: [Number, String],
      default: "100vw"
    },
    errorSrc: {
      type: String,
      default: 'https://fuss10.elemecdn.com/e/5d/4a731a731a90594a1171jpeg.jpeg'
    },
    objectFit: {
      type: String,
      default: 'cover',
      validator(value) {
        return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value);
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    previewEnabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const loadings = reactive(Array(props.images.length).fill(true));
    const errors = reactive(Array(props.images.length).fill(false));
    const showPreview = ref(-1); // -1 indicates no preview is shown
    const currentIndex = computed(() => {
      return Math.max(0, Math.min(showPreview.value, props.images.length - 1));
    });

    const imageStyle = (index) => {
      return {
        'object-fit': props.objectFit,
        opacity: loadings[index] ? '0.5' : '1'
      };
    };

    const currentSrc = (index) => {
      return errors[index] ? props.errorSrc : props.images[index];
    };

    const handleLoad = (index) => {
      loadings[index] = false;
      emit('load', index);
    };

    const handleError = (index) => {
      errors[index] = true;
      emit('error', index);
    };

    const prevImage = () => {
      if (currentIndex.value > 0) {
        showPreview.value--;
      } else {
        showPreview.value = props.images.length - 1;
      }
    };

    const nextImage = () => {
      if (currentIndex.value < props.images.length - 1) {
        showPreview.value++;
      } else {
        showPreview.value = 0;
      }
    };

    let keydownListener;

    const startKeyboardListening = () => {
      keydownListener = (event) => {
        if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'ArrowRight') {
          nextImage();
        }
      };
      document.addEventListener('keydown', keydownListener);
    };

    const stopKeyboardListening = () => {
      document.removeEventListener('keydown', keydownListener);
    };

    // Start listening for keyboard events when the preview is shown
    watch([() => props.previewEnabled, showPreview], ([previewEnabled, newVal]) => {
      if (previewEnabled && newVal >= 0) {
        startKeyboardListening();
      } else {
        stopKeyboardListening();
      }
    });

    onMounted(() => {
      startKeyboardListening(); // Initial setup
    });

    onUnmounted(() => {
      stopKeyboardListening(); // Cleanup when component is unmounted
    });

    // Reset the state when the images prop changes
    watch(() => props.images, () => {
      loadings.splice(0, loadings.length, ...Array(props.images.length).fill(true));
      errors.splice(0, errors.length, ...Array(props.images.length).fill(false));
      showPreview.value = -1;
      stopKeyboardListening();
    });

    return {
      loadings,
      errors,
      currentSrc,
      imageStyle,
      handleLoad,
      handleError,
      showPreview,
      currentIndex,
      prevImage,
      nextImage
    };
  }
};
</script>

<style scoped>
.an-image-box {
  position: relative;
  display: inline-block;
  margin: 0.1rem;
}

.an-image {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.3em;
  transition: all 0.3s ease-in-out;
}

.an-image:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.05); /* Slight zoom effect */
}

.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal img {
  max-width: 80vw;
  max-height: 80vh;
  cursor: pointer;
}

.modal button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.modal .prev-button {
  left: 20px;
}

.modal .next-button {
  right: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
