<script lang="ts">
import { defineComponent } from "vue";
import JokeList from "./components/joke/JokeList.vue";

export default defineComponent({
  components: {
    JokeList,
  },
});
</script>

<template>
  <main>
    <h1 class="app-heading">Joke Code Test</h1>
    <JokeList />
  </main>
</template>

<style scoped>
.app-heading {
  margin: 1rem;
}
</style>
