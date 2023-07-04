<script lang="ts">
import { defineComponent } from "vue";
import JokeList from "./components/joke/JokeList.vue";
import JokeLegend from "./components/joke/JokeLegend.vue";

export default defineComponent({
  components: {
    JokeList,
    JokeLegend,
  },
});
</script>

<template>
  <main>
    <h1 class="app-heading">Joke Code Test</h1>

    <JokeLegend />

    <JokeList />
  </main>
</template>

<style scoped>
.app-heading {
  margin: 1rem;
}
</style>
