import {ref, toRefs} from "vue";
import {getListPokemon, getPokemonDetail, getPokemonSprite} from "@/services/modules/pokemonVand.service";

export default function useFetchPokemon() {
    const isLoading = ref(false);
    const response = ref([]);
    const errors = ref(null);

    const fetchListPokemon = async (params:{}) => {
        isLoading.value = true;

        try {
            const res = await getListPokemon(params);
            response.value = res?.data;
        } catch (error) {
            const {data} = error as any;
            errors.value = data;
        } finally {
            isLoading.value = false;
        }
    };

    const fetchDetailPokemon = async (id: string) => {
        isLoading.value = true;

        try {
            const res = await getPokemonDetail(id);
            response.value = res?.data?.result;
        } catch (error) {
            const {data} = error as any;
            errors.value = data;
        } finally {
            isLoading.value = false;
        }
    };

    const fetchPokemonSprite = async (id: string) => {
        isLoading.value = true;

        try {
            const res = await getPokemonSprite(id);
            response.value = res?.data;
        } catch (error) {
            const {data} = error as any;
            errors.value = data;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        fetchListPokemon,
        fetchDetailPokemon,
        fetchPokemonSprite,
        isLoading, response, errors
    };
}
