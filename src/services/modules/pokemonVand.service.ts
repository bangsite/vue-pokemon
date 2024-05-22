import type {AxiosRequestConfig} from "axios";
import ApiService from "../api.service";

const getListPokemon = async (params?: {}, config?: AxiosRequestConfig): Promise<any> => {
    return await ApiService.get(`/pokemons`, {
        ...params,
        ...config,
    });
};

const getPokemonTypes = async (params?: {}, config?: AxiosRequestConfig): Promise<any> => {
    return await ApiService.get(`/types`, {
        ...params,
        ...config,
    });
};

const getPokemonDetail = async (id: string, config?: AxiosRequestConfig): Promise<any> => {
    return await ApiService.get(`/pokemons/${id}`, {
        ...config,
    });
};

const getPokemonSprite = async (id: string, config?: AxiosRequestConfig): Promise<any> => {
    return await ApiService.get(`/pokemons/${id}/sprite`, {
        ...config,
    });
};

export {getListPokemon, getPokemonDetail, getPokemonTypes, getPokemonSprite};
