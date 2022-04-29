import React from 'react';
import { GET_POKEMONS } from '../api';
import Card from '../components/Card';
import Input from '../components/Input';

const Home: React.FC = () => {
  const [filter, setFilter] = React.useState('');
  const [list, setList] = React.useState<any>(null);

  React.useEffect(() => {
    async function getList() {
      const json = await (await GET_POKEMONS(100)).results;
      setList(json.sort());
    }
    getList();
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <Input
        type="text"
        text="Procure seu pokemon preferido!"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
        value={filter}
      />
      <button type="button" onClick={handleClick}>
        Procurar
      </button>
      {list && console.log(list.length)}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list &&
          list.map((pokemon: any, i: number) => (
            <Card key={pokemon.name} name={pokemon.name} index={i} />
          ))}
      </div>
    </div>
  );
};

export default Home;
