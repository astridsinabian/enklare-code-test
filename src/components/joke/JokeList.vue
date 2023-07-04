<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

import JokeListItem from "./JokeListItem.vue";

import * as Types from "../../types";

export default defineComponent({
  components: {
    JokeListItem,
  },
  setup() {
    const apiJokeData = ref<Types.ApiJokeData | null>(null);
    const errorMessage = ref<Types.ErrorMessage>({
      message: "",
      isError: false,
    });
    const isLoading = ref<boolean>(false);

    async function getApiData(): Promise<void> {
      isLoading.value = true;
      try {
        const response = await axios.get<Types.ApiJokeData>(
          "https://v2.jokeapi.dev/joke/Programming,Pun,Misc,Spooky?safe-mode&amount=10"
        );

        if (response.status !== 200) {
          errorMessage.value = {
            message: response.statusText,
            isError: true,
          };
          isLoading.value = false;
        }

        apiJokeData.value = response.data;
        isLoading.value = false;
      } catch (error: unknown) {
        errorMessage.value = {
          message: error,
          isError: true,
        };
        isLoading.value = false;
      }
    }

    function onGetNewJokes(): void {
      getApiData();
    }

    onMounted(() => {
      getApiData();
    });

    return {
      apiJokeData,
      errorMessage,
      isLoading,
      onGetNewJokes,
    };
  },
});
</script>

<template>
  <button class="joke-list-fetch" @click="onGetNewJokes">
    Fetch new jokes
  </button>

  <div v-if="errorMessage.isError" class="joke-list-error">
    Oops... something went wrong!
  </div>

  <div v-if="isLoading" class="joke-list-loading">Loading...</div>

  <ul v-else class="joke-list">
    <JokeListItem :jokesData="apiJokeData?.jokes" />
  </ul>
</template>

<style scoped>
.joke-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  padding: 0;
  margin: 1.5rem 1rem 1rem 1rem;
}

.joke-list-fetch {
  border: 1px solid var(--color-light-gray);
  background-color: var(--color-light-gray);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 300ms;
  margin: 1.5rem 1rem 0.5rem 1rem;
}

.joke-list-fetch:hover,
.joke-list-fetch:focus {
  opacity: 0.7;
}

.joke-list-error,
.joke-list-loading {
  margin: 1.5rem 1rem 1rem 1rem;
}
</style>
