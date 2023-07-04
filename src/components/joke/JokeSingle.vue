<script lang="ts">
import { PropType, defineComponent } from "vue";

import { getShortenText } from "./_functionsJoke";

import * as Types from "../../types";

export default defineComponent({
  props: {
    joke: {
      type: Object as PropType<Types.Joke>,
      required: false,
    },
    isFullLength: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const isSingle = (type?: string) => type === Types.JOKE_TYPE.Single;

    return {
      getShortenText,
      isSingle,
    };
  },
});
</script>

<template>
  <div v-if="isSingle(joke?.type)" class="joke-single">
    {{ isFullLength ? joke?.joke : getShortenText(joke?.joke) }}
  </div>
</template>

<style scoped>
.joke-single {
  margin: 1rem 0;
}
</style>
