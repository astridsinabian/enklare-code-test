<script lang="ts">
import { PropType, defineComponent, ref } from "vue";

import Modal from "../Modal.vue";

import * as Types from "../../types";

export default defineComponent({
  components: {
    Modal,
  },
  props: {
    jokesData: {
      type: Array as PropType<Types.Joke[]>,
      required: false,
    },
  },
  setup() {
    const isModalOpen = ref<boolean>(false);
    const isTwoPart = (type: string) => type === Types.JOKE_TYPE.TwoPart;
    const isSingle = (type: string) => type === Types.JOKE_TYPE.Single;

    function onShowMore(): void {
      isModalOpen.value = true;
    }

    function onCloseModal(): void {
      isModalOpen.value = false;
    }

    return {
      isModalOpen,
      onCloseModal,
      isTwoPart,
      isSingle,
      onShowMore,
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

    <button @click="onShowMore">Show more</button>
    <Modal
      v-if="isModalOpen"
      :joke="joke"
      :isTwoPart="isTwoPart(joke.type)"
      :isSingle="isSingle(joke.type)"
      @close-modal="onCloseModal" />
  </li>
</template>

<style scoped></style>
