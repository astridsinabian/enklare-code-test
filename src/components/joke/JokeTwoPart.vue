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
    const isTwoPart = (type?: string) => type === Types.JOKE_TYPE.TwoPart;

    return {
      getShortenText,
      isTwoPart,
    };
  },
});
</script>

<template>
  <div v-if="isTwoPart(joke?.type)">
    <div :class="{ 'joke-two-part-setup': isFullLength }">
      {{ isFullLength ? joke?.setup : getShortenText(joke?.setup) }}
    </div>
    <div v-if="isFullLength">{{ joke?.delivery }}</div>
  </div>
</template>

<style scoped>
.joke-two-part-setup {
  margin: 1rem 0;
  font-weight: 700;
}
</style>
