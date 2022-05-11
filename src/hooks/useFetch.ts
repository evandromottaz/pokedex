import PokeAPI from 'pokeapi-typescript';
import React, { FC, useEffect, useState } from 'react';

type Props = {
  name: string;
};

const useFetch = ({ name }: Props) => {
  const [data, setData] = useState<object[] | unknown>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | unknown>('');
  useEffect(() => {
    async function pokeFetch() {
      try {
        const json = await PokeAPI.Pokemon.fetch(name);
        setData(json);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
  });

  return { data, isLoading, error };
};

export default useFetch;
