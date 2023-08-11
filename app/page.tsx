import PokemonGrid from '@/components/pokemon-grid';
import { getPokemonList } from '@/lib/pokemonAPI';

// add tanstack query
// fix pokemon types everywhere
// pokemon names to lower case
// error handler for api requests
// add back button
// add refresh button if its error
// adaptive
// image fill
// eslint
// theme error

export default async function Home() {
  const pokemonList = await getPokemonList();

  if (!pokemonList) {
    return <span>Error</span>;
  }

  return (
    <section>
      <PokemonGrid pokemonList={pokemonList} />
    </section>
  );
}
