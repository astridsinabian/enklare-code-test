<script lang="ts">
import { defineComponent } from "vue";

import Circle from "../Circle.vue";

export default defineComponent({
  components: {
    Circle,
  },
});
</script>

<template>
  <div class="joke-legend">
    <div class="joke-legend-group">
      <Circle category="programming" />
      <span class="joke-legend-group-text">Programming</span>
    </div>

    <div class="joke-legend-group">
      <Circle category="pun" />
      <span class="joke-legend-group-text">Pun</span>
    </div>

    <div class="joke-legend-group">
      <Circle />
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
</style>
