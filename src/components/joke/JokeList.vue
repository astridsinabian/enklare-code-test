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

    onMounted(() => {
      getApiData();
    });

    return {
      apiJokeData,
      errorMessage,
      isLoading,
    };
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>

  <div v-if="errorMessage.isError">
    Oops... something went wrong! (Error message: {{ errorMessage.message }})
  </div>

  <ul v-else>
    <JokeListItem :jokesData="apiJokeData?.jokes" />
  </ul>
</template>

<style scoped></style>
