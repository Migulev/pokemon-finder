import axios from 'axios';

type Params = {
  limit: number;
  offset: number;
};

const PARAMS: Params = {
  limit: 151,
  offset: 0,
};

export async function getPokemonList() {
  try {
    const response = await axios(process.env.POKEMON_URL!, {
      params: PARAMS,
    });
    return response.data.results;
  } catch {
    return null;
  }
}

export async function getPokemon(name: string) {
  try {
    const response = await axios(process.env.POKEMON_URL! + '/' + name);
    return response.data;
  } catch {
    return null;
  }
}
