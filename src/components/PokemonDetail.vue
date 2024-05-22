<template>
  <div class="pokemon-card" v-if="data">
    <img v-if="data?.id"
         class="pokemon-card__img"
         src="../assets/images/placeholder-pokemon.png"
         :data-src="`https://api.vandvietnam.com/api/pokemon-api/pokemons/${data?.id}/sprite`"
         alt="image pokemon"
         loading="lazy" @load="updateImage">

    <h4 class="pokemon-card__name">{{ data?.name }}</h4>

    <div class="pokemon-card__info">
      <span><strong>Generation:</strong> {{ data?.generation }}</span>
      <span><strong>Legendary:</strong> {{ data?.legendary }}</span>
      <span><strong>Total:</strong> {{ data?.total }}</span>
    </div>

    <div class="pokemon-statistic">
      <div class="pokemon-statistic__wrap">
        <strong>HP:</strong>
        <ProgressBar :data="data?.hp" :max="MAX_STATS['hp']"/>
      </div>
      <div class="pokemon-statistic__wrap">
        <strong>Attack:</strong>
        <ProgressBar :data="data?.attack" :max="MAX_STATS['attack']"/>
      </div>
      <div class="pokemon-statistic__wrap">
        <strong>Defense:</strong>
        <ProgressBar :data="data?.defense" :max="MAX_STATS['defense']"/>
      </div>
      <div class="pokemon-statistic__wrap">
        <strong>Spec.Attack:</strong>
        <ProgressBar :data="data?.sp_atk" :max="MAX_STATS['sp_atk']"/>
      </div>
      <div class="pokemon-statistic__wrap">
        <strong>Spec.Defense:</strong>
        <ProgressBar :data="data?.sp_def" :max="MAX_STATS['sp_def']"/>
      </div>
      <div class="pokemon-statistic__wrap">
        <strong>Speed:</strong>
        <ProgressBar :data="data.speed" :max="MAX_STATS['speed']"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/ProgressBar.vue";
import {MAX_STATS} from "@/enums/statistic.enum";

defineProps({
  data: {
    type: Object,
    default: () => {
    },
  },
  loading: {
    type: Boolean,
    default: false
  }
});
const updateImage = (event: Event) => {
  let target = event.target as HTMLImageElement;
  if (target.dataset.src) target.src = target.dataset.src;
}
</script>

<style scoped>
</style>
