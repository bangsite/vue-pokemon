import {defineStore} from "pinia";
import type {Pokemon, PokemonType} from "@/types/pokemon";

interface State {
    pokemonList: Pokemon[];
    pokemonType: PokemonType[];
}

export const usePokemonStore = defineStore("PokemonStore", {
    state: (): State => {
        return {
            pokemonList: [],
            pokemonType: [],
        };
    },

    getters: {
        getPokemonType(state) {
            return state.pokemonType;
        },
    },

    actions: {
        setPokemonList(data: []) {
            this.pokemonList = data;
        },
        setPokemonType(data: []) {
            this.pokemonType = data;
        },
    },
});
