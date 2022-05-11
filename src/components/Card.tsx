import PokeAPI from 'pokeapi-typescript';
import { useState, useEffect } from 'react';
import { GET_POKEMON } from '../api';
import { Container, Image, Title } from '../styles/Card.styled';
import { IList } from './Pokedex';

const pokemonTypes: object = {
  grass: 'green',
  fire: 'red',
  water: '#d4f1f9',
  bug: 'gray',
  normal: '#fff',
  poison: 'darkgreen',
  electric: 'yellow',
  ground: 'darkbrown',
  fairy: 'lightblue',
  fighting: 'darkred',
  psychic: 'purple',
  rock: 'brown',
  ghost: 'black',
};

interface IPokemon {
  name: string;
  sprites: { front_default: string };
  types: Array<{ type: { name: string } }>;
}

type PokeName = {
  name: string;
};

const Card: React.FC<PokeName> = ({ name }) => {
  const [pokemon, setPokemon] = useState<IPokemon | unknown>(null);

  useEffect(() => {
    async function oijenib() {
      const pokemon = await PokeAPI.Pokemon.fetch(name);
      console.log(typeof pokemon);
      // const { sprites, types } = await PokeAPI.Pokemon.fetch(name);

      pokemon && setPokemon(pokemon);
    }
    oijenib();
  }, [name]);

  return (
    <Container>
      {/* <img src={pokemon.} alt={pokemon} /> */}
      <Title>{name}</Title>
    </Container>
  );
};

export default Card;
