<script setup lang="ts">

import {onBeforeMount} from "vue";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import CardPokemon from "@/components/CardPokemon.vue";
import useFetchPokemon from "@/composables/useFetchPokemon";
import CardPokemonSkeleton from "@/components/CardPokemonSkeleton.vue";

const {fetchListPokemon, response:dataPokemon, errors, isLoading} = useFetchPokemon();
console.log(dataPokemon)
onBeforeMount(() => {
  fetchListPokemon();
})
</script>

<template>
  <TheHeader/>

  <main class="container main">
    <h1 class="title">Pokemon</h1>
    <Suspense >
      <template #default>
        <CardPokemon :data="dataPokemon.data"/>
      </template>

      <template #fallback>
        <CardPokemonSkeleton/>
      </template>
    </Suspense>
  </main>

  <TheFooter/>
</template>
