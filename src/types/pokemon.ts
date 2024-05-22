export interface Pokemon {
    id: string,
    name: string,
    number: number,
    attack: number,
    defense: number,
    generation: number,
    hp: number,
    legendary: number,
    sp_atk: number,
    sp_def: number,
    speed: number,
    total: number,
    type_1: number,
    type_2: number,
    created_at?: string,
    updated_at?: string,
}

export interface PokemonType {
    id: number | string,
    name: string,
}


export interface PokemonTypeResponse {
    data: any;
}


export interface PokemonResponse {
    data: any;
    meta: any;
}

export interface PokemonDetailResponse {
    data: any;
}
