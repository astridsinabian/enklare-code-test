<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="joke-legend">
    <div class="joke-legend-group">
      <span class="joke-legend-group-circle programming"></span>
      <span class="joke-legend-group-text">Programming</span>
    </div>

    <div class="joke-legend-group">
      <span class="joke-legend-group-circle pun"></span>
      <span class="joke-legend-group-text">Pun</span>
    </div>

    <div class="joke-legend-group">
      <span class="joke-legend-group-circle"></span>
      <span class="joke-legend-group-text">Other</span>
    </div>
  </div>
</template>

<style scoped>
.joke-legend {
  display: flex;
  margin: 1rem;
}

.joke-legend-group {
  display: flex;
  margin-right: 1rem;
}

.joke-legend-group-circle {
  display: flex;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin-right: 0.5rem;
  background-color: var(--color-light-gray);
}

.joke-legend-group-circle.programming {
  background-color: var(--color-blue);
}

.joke-legend-group-circle.pun {
  background-color: var(--color-red);
}
</style>
