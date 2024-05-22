import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import CardPokemon from '../CardPokemon.vue'
import type {Pokemon} from "../../types/pokemon";

describe('CardPokemon', () => {
    it('should display correct data', () => {
        const data: Pokemon[] = [];// dump data
        const wrapper = mount(CardPokemon, {props: {data, loading: false}})
        expect(wrapper.findAll('.card-item').length).toEqual(data.length)
    })
})
