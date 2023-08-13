'use client';

import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { Input } from './ui/input';
import { PokemonCard } from './pokemon-card';

type Pokemon = {
  name: string;
  url: string;
};

type Props = {
  pokemonList: Pokemon[];
};

export default function PokemonGrid({ pokemonList }: Props) {
  const [searchText, setSearchText] = useState('');

  const filteredPokemonList = pokemonList.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className=" mx-auto inline-block mb-8 md:mb-12 md:mt-3 lg:mt-0">
        <h3 className=" text-xl md:text-2xl py-6">Search For Your Pokemon!</h3>
        <Label htmlFor="pokemonName" className=" inline-block mb-1.5">
          Pokemon Name
        </Label>
        <Input
          type="text"
          value={searchText}
          autoComplete="off"
          id="pokemonName"
          placeholder="Charizard, Pikachu, etc."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <h3 className="text-3xl md:mb-6 text-center">Pokemon Collection</h3>

      <div className="grid md:grid-cols-3">
        {filteredPokemonList.map((pokemon: Pokemon, i: number) => {
          return <PokemonCard name={pokemon.name.toLowerCase()} key={i} />;
        })}
      </div>
    </div>
  );
}
