import React from 'react';
import { GET_POKEMON } from '../api';
import { Container } from '../styles/Card.styled';

type typeProps = {
  [types: string]: string;
};

const Card = ({ name, index }: any) => {
  const [pokemon, setPokemon] = React.useState<any>(null);
  const [bgCard, setBgCard] = React.useState<any>('');

  function backgroundType(type: string) {
    const types: typeProps = {
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
    if (type) {
      if (types[type]) return types[type];
    }
  }

  React.useEffect(() => {
    async function getPokemon() {
      const json = await GET_POKEMON(name);
      setPokemon(json.sprites.front_default);

      const typePokemon = json.types[0].type.name;
      const bgPokemon = backgroundType(typePokemon);
      setBgCard(bgPokemon);
    }
    getPokemon();
  }, []);

  return (
    <Container backG={bgCard && bgCard}>
      <div>
        <img src={pokemon && pokemon} alt={name} />
      </div>
      <h2>{name}</h2>
    </Container>
  );
};

export default Card;
