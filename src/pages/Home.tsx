import React from 'react';
import { GET_POKEMON } from '../api';
import Card from '../components/Card';
import Input from '../components/Input';

const Home: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [pokemon, setPokemon] = React.useState<any>(null);
  const [error, setError] = React.useState('');

  async function getPokemon(url: string) {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setPokemon(json);
      setError('');
      console.log(json);
    } catch (error) {
      setError(`O Pokemon ${search} não existe`);
      setPokemon(null);
    }
  }

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    const { url } = GET_POKEMON(search);

    getPokemon(url);
  }

  return (
    <div className="container">
      <Input
        type="text"
        text="Procure seu pokemon preferido!"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        value={search}
      />
      <button onClick={handleClick}>Procurar</button>
      {error && <p>{error}</p>}
      {pokemon && <img src={pokemon.sprites[0]} alt={pokemon.name} />}
      <Card pokemon={pokemon} />
    </div>
  );
};

export default Home;
