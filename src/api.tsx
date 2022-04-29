import pokeAPI from 'pokeapi-typescript';
const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export function GET_POKEMONS(total: number) {
  return pokeAPI.Pokemon.list(total);
}

export function GET_POKEMON(pokemon: string) {
  return pokeAPI.Pokemon.fetch(pokemon);
}
