<script lang="ts">
import { PropType, defineComponent } from "vue";

import { getShortenText } from "./_functionsJoke";

import * as Type from "../../types";

export default defineComponent({
  props: {
    joke: {
      type: Object as PropType<Type.Joke>,
      required: false,
    },
    isFullLength: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    return {
      getShortenText,
    };
  },
});
</script>

<template>
  <div>{{ isFullLength ? joke?.joke : getShortenText(joke?.joke) }}</div>
</template>

<style scoped></style>
