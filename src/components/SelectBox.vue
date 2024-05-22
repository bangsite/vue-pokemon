<template>
  <select v-model="selected" @change="handleSelected">
    <option disabled value="">{{ placeholder }}</option>

    <option v-for="item in data" :key="item.id" :value="item.id">
      {{ item?.name }}
    </option>

  </select>
</template>

<script setup lang="ts">
import type {PokemonType} from "@/types/pokemon";
import {ref} from "vue";

defineProps({
  data: {
    type: Array as () => PokemonType[],
    default: () => [],
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const selected = ref('');

const emit = defineEmits(['selected'])

const handleSelected = () => {
  emit('selected', selected.value);
};

const reset = () => {
  selected.value = '';
  emit('selected', selected.value);
}

defineExpose({ reset });
</script>

<style scoped lang="scss">
select {
  border-radius: 6px;
  color: #333;
  font-size: 16px;
  width: max-content;
  position: relative;
  padding: 0.5rem 0.5rem;

  option {
    border-radius: 5px;
    cursor: pointer;
    padding: 1rem;
  }
}
</style>
