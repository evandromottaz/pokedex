import React from 'react';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';

const Home: React.FC = () => {
  return (
    <div>
      <Search />
      <Pokedex />
    </div>
  );
};

export default Home;
