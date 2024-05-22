<template>
  <div v-if="isLoading" class="loading-overlay">
    <img src="../assets/images/pokeball.gif" alt="pokeball">
  </div>
</template>

<script setup lang="ts">
import {useLoadingStore} from '@/stores/loading.store';
import {computed} from "vue";
import {storeToRefs} from "pinia";

const {loading} = storeToRefs(useLoadingStore());
const isLoading = computed(() => loading.value);
</script>

<style scoped lang="scss">
.loading {
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 1);
    background: linear-gradient(to right, rgba(244, 162, 97, 1), rgba(231, 111, 81, 1));
    z-index: 1000;

    img {
      width: fit-content;
    }
  }
}
</style>
