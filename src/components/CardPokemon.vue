<template>
  <div class="card" v-if="data  && data.length > 0">
    <div class="card-list">
      <!-- Show overlay spinner when loading -->
      <SpinnerPokemon v-if="loading"/>

      <div class="card-item" v-for="item in data" :key="item.id">
        <img
            :src="item.img  ? item.img  : placeholderPokemon"
            :data-src="item.img "
            alt="image pokemon"
            loading="lazy"
        />

        <div class="card-content">
          <p class="btn btn-tag"><strong>#{{ item?.number }}</strong></p>
          <h4><strong>{{ item?.name }}</strong></h4>
          <span>Generation: {{ item?.generation }}</span>
        </div>

        <button class="btn btn-detail" @click="showPokemonDetail(item)">Detail</button>
      </div>
    </div>
  </div>

  <div v-else class="card-empty">
    <img src="../assets/images/empty-data.png" alt="no data" srcset="">
    <h4>No Data</h4>
    <p>There is no data to show you right now</p>
  </div>

  <Suspense v-if="isActive">
    <ModalBase :modalActive="isActive" @close-modal="closeModal">
      <template #header><h5>#{{ currentNumber }}</h5></template>
      <template #body>
        <PokemonDetail :data="responsePokemonDetail?.data"/>
      </template>
      <template #fallback>
        <SpinnerPokemon/>
      </template>
    </ModalBase>
  </Suspense>
</template>

<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";

import type {Pokemon} from "@/types/pokemon";
import SpinnerPokemon from "@/components/SpinnerPokemon.vue";
import useFetchPokemon from "@/composables/useFetchPokemon";
import placeholderPokemon from "@/assets/images/placeholder-pokemon.png";

const ModalBase = defineAsyncComponent(() => import('@/components/ModalBase.vue'));
const PokemonDetail = defineAsyncComponent(() => import('@/components/PokemonDetail.vue'));

const props = defineProps({
  data: {
    type: Array as () => Pokemon[],
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false
  }
});
const {fetchDetailPokemon, responsePokemonDetail} = useFetchPokemon();
const isActive = ref(false);
const currentNumber = ref(0);

const showPokemonDetail = (data: Pokemon) => {
  const {id, number} = data;
  isActive.value = true;
  currentNumber.value = number;

  if (id) fetchDetailPokemon(id);
}

const closeModal = (event: boolean) => {
  isActive.value = event;
}
</script>

<style scoped>
</style>
