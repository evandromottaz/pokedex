import { useState, MouseEvent } from 'react';
import Button from './Button';
import Input from './Input';

const Search = () => {
  const [filter, setFilter] = useState('');

  function handleSearch(event: MouseEvent) {
    event.preventDefault();
  }

  return (
    <div>
      <Input
        text="Procure seu pokemon preferido!"
        onChange={(e) => setFilter((e.target as HTMLInputElement).value)}
        value={filter}
      />
      <Button onClick={handleSearch}>Procurar</Button>
    </div>
  );
};

export default Search;
