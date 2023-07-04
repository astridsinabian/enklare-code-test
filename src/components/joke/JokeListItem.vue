<script lang="ts">
import { PropType, defineComponent, ref } from "vue";

import Modal from "../Modal.vue";
import Circle from "../Circle.vue";
import CustomButton from "../CustomButton.vue";
import JokeTwoPart from "./JokeTwoPart.vue";
import JokeSingle from "./JokeSingle.vue";

import * as Types from "../../types";

export default defineComponent({
  components: {
    Modal,
    Circle,
    CustomButton,
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
      onShowMore,
    };
  },
});
</script>

<template>
  <li v-for="joke in jokesData" :key="joke.id" class="joke-list-item">
    <div class="joke-list-item-right">
      <Circle :category="joke.category.toLowerCase()" />

      <JokeTwoPart :joke="joke" />

      <JokeSingle :joke="joke" />
    </div>

    <CustomButton @click="onShowMore(joke)">Show more</CustomButton>

    <Modal v-if="isModalOpen" @close-modal="onCloseModal">
      <JokeTwoPart :joke="selectedJoke" :isFullLength="true" />
      <JokeSingle :joke="selectedJoke" :isFullLength="true" />
    </Modal>
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
  align-items: center;
}
</style>
