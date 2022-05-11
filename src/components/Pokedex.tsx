import Card from './Card';
import { Container } from '../styles/Pokedex.styled';
import PokeAPI from 'pokeapi-typescript';
import { useEffect, useState } from 'react';

export interface IList {
  name: string;
}

const Pokedex = () => {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    (async () => {
      const json = await PokeAPI.Pokemon.list(10);
      setList(json.results);
    })();
  }, []);

  return (
    <Container>
      {list.map(({ name }) => (
        <Card key={name} name={name} />
      ))}
    </Container>
  );
};

export default Pokedex;
