<script lang="ts">
import { PropType, defineComponent, onMounted, ref } from "vue";

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
  setup(props) {
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

    onMounted(() => {
      console.log(props.jokesData);
    });

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
  <li
    v-for="joke in jokesData"
    :key="joke.id"
    :class="`joke-list-item ${joke.category.toLowerCase()}`">
    <JokeTwoPart v-if="isTwoPart(joke.type)" :joke="joke" />

    <JokeSingle v-else-if="isSingle(joke.type)" :joke="joke" />

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
  padding: 0.5rem;
  background-color: #f2f2f2;
}

.joke-list-item.programming {
  background-color: blue;
}

.joke-list-item.pun {
  background-color: red;
}
</style>
