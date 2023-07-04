<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    category: {
      type: String,
      required: false,
    },
  },
  setup(_, context) {
    function onClick(): void {
      context.emit("click");
    }

    return {
      onClick,
    };
  },
});
</script>

<template>
  <button class="custom-button" @click="onClick">
    <slot></slot>
  </button>
</template>

<style scoped>
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-light-gray);
  background-color: var(--color-light-gray);
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: opacity 300ms;
  font-size: 1rem;
}

.custom-button:hover,
.custom-button:focus {
  opacity: 0.7;
}
</style>
