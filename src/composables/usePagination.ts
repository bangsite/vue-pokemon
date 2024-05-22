import {computed, ref} from "vue";
import type {Pagination} from "@/types/pagination";

export default function usePagination() {
    const currentPage = ref(1);
    const perPage = ref(10);
    const totalItems = ref(0);

    const totalPage = computed(() => Math.ceil(totalItems.value / perPage.value));
    const paginationInfo = computed(() => ({
        firstPage: 1,
        lastPage: totalPage.value,
        currentPage: currentPage.value,
        totalPage: totalPage.value,
        perPage: perPage.value,
    }));

    const setPagination = (data: Pagination) => {
        if (data.currentPage != null) {
            currentPage.value = data.currentPage;
        }
        if (data.perPage != null) {
            perPage.value = data.perPage;
        }
        if (data.total != null) {
            totalItems.value = data.total;
        }
    }


    return {
        currentPage,
        totalPage,
        paginationInfo,
        setPagination
    }
}
