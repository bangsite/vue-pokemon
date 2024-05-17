<template>
  <div class="card">
    <div class="card-list">
      <template v-if="data && data.length > 0">
        <div class="card-item" v-for="item in data" :key="item.id">
          <img :src="`https://api.vandvietnam.com/api/pokemon-api/pokemons/${item.id}/sprite`" alt="image character" >
          <h3>{{ item?.name }}</h3>
          <p> #{{ item?.number }}</p>
          <p>Generation: {{ item?.generation }}</p>
          <button class="btn">Detail</button>
        </div>
      </template>
    </div>

  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, toRefs} from "vue";
import type {Pokemon} from "@/types/pokemon";
import useFetchPokemon from "@/composables/useFetchPokemon";

const props = defineProps({
  data: {
    type: Array as () => Pokemon[],
    default: () => [],
  },
})

const {id} = toRefs(props.data);
const {fetchPokemonSprite, response:dataPokemonSprite, errors, isLoading} = useFetchPokemon();
console.log('dataPokemonSprite:::',dataPokemonSprite);


onBeforeMount(()=>{
  fetchPokemonSprite('01H5GXS0FP36H9RNBQN5Z415W4');

})
</script>

<style scoped>

</style>
