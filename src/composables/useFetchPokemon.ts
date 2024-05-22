import {ref} from "vue";
import {
    getListPokemon,
    getPokemonDetail,
    getPokemonSprite,
    getPokemonTypes
} from "@/services/modules/pokemonVand.service";
import type {PokemonDetailResponse, PokemonResponse, PokemonTypeResponse} from "@/types/pokemon";

export default function useFetchPokemon() {
    const isLoading = ref(false);
    const responsePokemon = ref<PokemonResponse | null>(null);
    const responsePokemonSprite = ref(null);
    const responsePokemonDetail = ref<PokemonDetailResponse | null>(null);
    const responsePokemonTypes = ref<PokemonTypeResponse | null>(null);
    const errors = ref(null);

    const fetchListPokemon = async (params: { [key: string]: any }) => {
        isLoading.value = true;

        try {
            const res = await getListPokemon(params);
            responsePokemon.value = res.data;
        } catch (error) {
            const {data} = error as any;
            errors.value = data;
        } finally {
            isLoading.value = false;
        }
    };

    const fetchListPokemonTypes = async () => {
        isLoading.value = true;

        try {
            const res = await getPokemonTypes();
            responsePokemonTypes.value = res.data;
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
            responsePokemonDetail.value = res.data;
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
            responsePokemonSprite.value = res.data;
        } catch (error) {
            const {data} = error as any;
            errors.value = data;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        fetchListPokemon,
        fetchListPokemonTypes,
        fetchDetailPokemon,
        fetchPokemonSprite,
        responsePokemon,
        responsePokemonDetail,
        responsePokemonTypes,
        responsePokemonSprite,
        isLoading, errors
    };
}
