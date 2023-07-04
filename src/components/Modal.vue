<script lang="ts">
import { PropType, defineComponent } from "vue";

import JokeTwoPart from "./joke/JokeTwoPart.vue";
import JokeSingle from "./joke/JokeSingle.vue";

import * as Types from "../types";

export default defineComponent({
  components: {
    JokeTwoPart,
    JokeSingle,
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
        <button class="modal-close" @click="onCloseModal">X</button>

        <div class="modal-content">
          <JokeTwoPart v-if="isTwoPart" :joke="joke" :isFullLength="true" />
          <JokeSingle v-else-if="isSingle" :joke="joke" :isFullLength="true" />
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

.modal-close {
  cursor: pointer;
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
