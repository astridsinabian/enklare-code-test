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
  <div>
    Hello World!
    <JokeList />
  </div>
</template>

<style scoped></style>
