<script lang="ts">
import { PropType, defineComponent } from "vue";

import JokeTwoPart from "./joke/JokeTwoPart.vue";
import JokeSingle from "./joke/JokeSingle.vue";
import Circle from "./Circle.vue";

import * as Types from "../types";

export default defineComponent({
  components: {
    JokeTwoPart,
    JokeSingle,
    Circle,
  },
  props: {
    joke: {
      type: Object as PropType<Types.Joke>,
      required: false,
    },
    isTwoPart: {
      type: Boolean,
      required: false,
    },
    isSingle: {
      type: Boolean,
      required: false,
    },
  },
  setup(_, context) {
    function onCloseModal(): void {
      context.emit("close-modal");
    }

    return {
      onCloseModal,
    };
  },
});
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="onCloseModal">
      <div class="modal" @click.stop>
        <div class="modal-top">
          <Circle :category="joke?.category.toLowerCase()" />
          <button class="modal-top-close" @click="onCloseModal">X</button>
        </div>

        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #0e0e0e1d;
}

.modal {
  padding: 1.5rem;
  background-color: #ffffff;
  height: 15rem;
  width: 30rem;
}

.modal-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-top-close {
  border: 1px solid var(--color-light-gray);
  background-color: var(--color-light-gray);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 300ms;
}

.modal-top-close:hover,
.modal-top-close:focus {
  opacity: 0.7;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
