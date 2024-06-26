<template>
  <Transition name="modal-animate">
    <Teleport to="body">
      <div class="modal-overlay" id="modal-overlay"></div>
      <Transition name="modal-animate-inner">
        <div
            v-show="modalActive"
            class="modal"
            id="modal"
            role="dialog"
            aria-labelledby="modal-header"
            aria-describedby="modal-body"
        >
          <div class="modal-container" :style="{ width: width, height: height }">
            <header class="modal-header" id="modal-header">
              <slot name="header"></slot>
              <button class="modal-header-close" @click.prevent="closeModal">
                <Icon icon="ic:round-close" :style="{ 'font-size': '24px' }" />
              </button>
            </header>

            <section class="modal-body" id="modal-body">
              <slot name="body"></slot>
            </section>

            <footer class="modal-footer" id="modal-footer">
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </Transition>
    </Teleport>
  </Transition>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const props = defineProps({
  className: { type: String },
  stopEvent: { type: Boolean, default: false },
  modalActive: { type: Boolean },
  width: {
    type: [Number],
  },
  height: {
    type: [Number],
  },
});
const emits = defineEmits(["closeModal"]);
const width = ref(props.width + "px");
const height = ref(props.height + "px");

const closeModal = () => {
  emits("closeModal", false);
};
</script>

<style lang="scss" scoped>
.modal-animate-enter-active,
.modal-animate-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animate-enter-from,
.modal-animate-leave-to {
  opacity: 0;
}

.modal-animate-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animate-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animate-inner-enter-from {
  opacity: 0;
  transform: scale(1.01);
}

.modal-animate-inner-leave-to {
  transform: scale(1.01);
}
</style>
