<template>
  <div class="pagination">
    <template v-for="page in pages" :key="page">
      <span v-if="page==='...'">
        {{ page }}
      </span>

      <button v-else class="btn" @click="changePage(page)" :disabled="page === currentPage">
        {{ page }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, watch} from 'vue';
import usePagination from "@/composables/usePagination";
import {generatePaginationRange} from "@/utils/pagination";

const props = defineProps({
  pagination: {
    type: Object,
    default: () => {
    },
  }
});

const emit = defineEmits(['update:currentPage']);
const {currentPage, totalPage, setPagination} = usePagination();

const pages = computed(() => {
  return generatePaginationRange(currentPage.value, totalPage.value);
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPage.value) {
    currentPage.value = page;
  }

  emit('update:currentPage', page);
}

onMounted(() => {
  if (props.pagination) {
    setPagination({
      currentPage: props.pagination?.current_page ?? 1,
      perPage: props.pagination?.per_page ?? 10,
      total: props.pagination?.total ?? 0,
    })
  }
})

watch(() => props.pagination, (newPagination, oldPagination) => {
  setPagination({
    currentPage: newPagination?.current_page ?? 1,
    perPage: newPagination?.per_page ?? 10,
    total: newPagination?.total ?? 0,
  })
}, {deep: true});
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

button {
  padding: 8px 12px;
  border: none;
  background-color: #ffff;
  cursor: pointer;
}

button:disabled {
  background: linear-gradient(to right, #f4a261, #e76f51);
  color: #fff;
  cursor: not-allowed;
}
</style>
