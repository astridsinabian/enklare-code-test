<script lang="ts">
import { PropType, defineComponent } from "vue";
import * as Types from "../../types";

export default defineComponent({
  props: {
    jokesData: {
      type: Array as PropType<Types.Joke[]>,
      required: false,
    },
  },
  setup() {
    const isTwoPart = (type: string) => type === Types.JOKE_TYPE.TwoPart;
    const isSingle = (type: string) => type === Types.JOKE_TYPE.Single;

    return {
      isTwoPart,
      isSingle,
    };
  },
});
</script>

<template>
  <li v-for="joke in jokesData" :key="joke.id">
    <div v-if="isTwoPart(joke.type)">
      <div>{{ joke.setup }}</div>
      <div>{{ joke.delivery }}</div>
    </div>

    <div v-else-if="isSingle(joke.type)">
      <div>{{ joke.joke }}</div>
    </div>
  </li>
</template>

<style scoped></style>
