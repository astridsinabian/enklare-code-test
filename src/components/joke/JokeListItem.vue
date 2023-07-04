<script lang="ts">
import { PropType, defineComponent, ref } from "vue";

import Modal from "../Modal.vue";
import JokeTwoPart from "./JokeTwoPart.vue";
import JokeSingle from "./JokeSingle.vue";

import * as Types from "../../types";

export default defineComponent({
  components: {
    Modal,
    JokeTwoPart,
    JokeSingle,
  },
  props: {
    jokesData: {
      type: Array as PropType<Types.Joke[]>,
      required: false,
    },
  },
  setup() {
    const isModalOpen = ref<boolean>(false);
    const jokes = ref<Types.Joke[] | null>(null);
    const selectedJoke = ref<Types.Joke | undefined>(undefined);

    const isTwoPart = (type: string) => type === Types.JOKE_TYPE.TwoPart;
    const isSingle = (type: string) => type === Types.JOKE_TYPE.Single;

    function onShowMore(joke: Types.Joke): void {
      isModalOpen.value = true;
      selectedJoke.value = joke;
    }

    function onCloseModal(): void {
      isModalOpen.value = false;
    }

    return {
      isModalOpen,
      jokes,
      selectedJoke,
      onCloseModal,
      isTwoPart,
      isSingle,
      onShowMore,
    };
  },
});
</script>

<template>
  <li v-for="joke in jokesData" :key="joke.id" class="joke-list-item">
    <div class="joke-list-item-right">
      <span
        :class="`joke-list-item-right-circle ${joke.category.toLowerCase()}`"></span>

      <JokeTwoPart v-if="isTwoPart(joke.type)" :joke="joke" />

      <JokeSingle v-else-if="isSingle(joke.type)" :joke="joke" />
    </div>

    <button @click="onShowMore(joke)">Show more</button>
    <Modal
      v-if="isModalOpen"
      :joke="selectedJoke"
      :isTwoPart="isTwoPart(joke.type)"
      :isSingle="isSingle(joke.type)"
      @close-modal="onCloseModal" />
  </li>
</template>

<style scoped>
.joke-list-item {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1.5rem;
  border: 1px solid var(--color-light-gray);
}

.joke-list-item-right {
  display: flex;
}

.joke-list-item-right-circle {
  display: flex;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin-right: 0.5rem;
  background-color: var(--color-light-gray);
}

.joke-list-item-right-circle.programming {
  background-color: var(--color-blue);
}

.joke-list-item-right-circle.pun {
  background-color: var(--color-red);
}
</style>
