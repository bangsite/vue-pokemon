<template>
  <div class="pokemon-card" v-if="data">
    <img
        :src="data.img  ? data.img  : placeholderPokemon"
        :data-src="data.img "
        alt="image pokemon"
        loading="lazy"
    />

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
import {loadImage} from "@/utils/images";
import placeholderPokemon from "@/assets/images/placeholder-pokemon.png";

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

const maxRetries = 3;
const retryDelay = 1000; // Initial delay of 1 second

// const updateImage = (event: Event) => {
//   let target = event.target as HTMLImageElement;
//   if (target.dataset.src) target.src = target.dataset.src;
// }

const updateImage = async (event: Event, retryCount = 0) => {
  const target = event.target as HTMLImageElement;

  if (!target) return;

  if (target.dataset?.src) {
    try {
      const src = await loadImage(target.dataset.src);

      if (typeof src === "string") target.src = src;
    } catch (error) {
      if (retryCount < maxRetries) {
        console.log(`Retrying to load image: ${target.dataset.src} (Attempt ${retryCount + 1})`);

        setTimeout(() => updateImage(event, retryCount + 1), retryDelay * Math.pow(2, retryCount));

      } else {
        console.error("Image load failed after retries:", error);
        target.src = "../assets/images/placeholder-pokemon.png";

      }
    }
  }
};

</script>

<style scoped>
img{
  max-width: 120px;
}
</style>
