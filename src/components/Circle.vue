<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    category: {
      type: String,
      required: false,
    },
  },
});
</script>

<template>
  <span :class="`circle ${category}`"></span>
</template>

<style scoped>
.circle {
  display: flex;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin-right: 0.5rem;
  background-color: var(--color-light-gray);
}

.circle.programming {
  background-color: var(--color-blue);
}

.circle.pun {
  background-color: var(--color-red);
}
</style>
