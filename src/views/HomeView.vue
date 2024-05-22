<template>
  <TheHeader/>

  <main class="container">
    <Suspense>
      <template #default>
        <div class="main">
          <div class="main-header" v-if="responsePokemon?.data">
            <SelectBox placeholder="Select type "
                       ref="typeSelect"
                       :data="responsePokemonTypes?.data"
                       @selected="handleTypeChange"/>

            <SelectBox placeholder="Sort by "
                       ref="sortSelect"
                       :data="SORTED_POKEMON"
                       @selected="handleSortBy"/>

            <button class="btn btn-primary" @click="handleReset">Reset</button>
          </div>

          <CardPokemon :data="responsePokemon?.data" :loading="isLoading"/>

          <Pagination
              v-if="responsePokemon?.meta"
              :pagination="responsePokemon?.meta"
              @update:currentPage="updateCurrentPage"/>

        </div>
      </template>

      <template #fallback>
        <SkeletonCardPokemon/>
      </template>
    </Suspense>
  </main>

  <TheFooter/>
</template>
<script setup lang="ts">
import {onBeforeMount, ref} from "vue";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import CardPokemon from "@/components/CardPokemon.vue";
import Pagination from "@/components/Pagination.vue";
import SelectBox from "@/components/SelectBox.vue";
import SkeletonCardPokemon from "@/components/SkeletonCardPokemon.vue";

import {fotmatParamsWithFilter} from "@/utils/fetchParams";
import useFetchPokemon from "@/composables/useFetchPokemon";
import {SORTED_POKEMON} from "@/enums/sortBy.enum";
import {usePokemonStore} from "@/stores/pokemon.store";

const {fetchListPokemon, fetchListPokemonTypes, responsePokemon, responsePokemonTypes, isLoading} = useFetchPokemon();
const {setPokemonType} = usePokemonStore();
const typeSelect = ref(null);
const sortSelect = ref(null);
const params = ref({
  pagination: {
    number: 1,
    size: 10
  },
  filters: {},
  sort: ''
});
const fetchInitialData = async () => {
  try {
    const fetchParams = fotmatParamsWithFilter(params.value);

    await Promise.all([
      fetchListPokemonTypes(), fetchListPokemon({params: {...fetchParams}})
    ]);

    setPokemonType(responsePokemonTypes);

  } catch (error) {
    console.log('Error data:', error);
  }
}

onBeforeMount(() => {
  fetchInitialData();
})

const handleTypeChange = async (typeId: number) => {
  params.value.pagination.number = 1;
  params.value.filters = {type: typeId}
  const fetchParams = fotmatParamsWithFilter(params.value);

  await fetchListPokemon({params: fetchParams});
};

const handleSortBy = async (sortKey: string) => {
  params.value.sort = sortKey
  const fetchParams = fotmatParamsWithFilter(params.value);

  await fetchListPokemon({params: fetchParams});
};

const updateCurrentPage = async (newPage: number) => {
  params.value.pagination.number = newPage;

  const fetchParams = fotmatParamsWithFilter(params.value);

  await fetchListPokemon({params: fetchParams});
};

const handleReset = async () => {
  await typeSelect.value?.reset();
  await sortSelect.value?.reset();

  params.value.pagination.number = 1;
  params.value.filters = {};
  params.value.sort = '';
  const fetchParams = fotmatParamsWithFilter(params.value);

  await fetchListPokemon({params: {...fetchParams}});
}
</script>
