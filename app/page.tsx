import PokemonGrid from '@/components/pokemon-grid';
import { getPokemonList } from '@/lib/pokemonAPI';

// image fill
// adaptive
// add refresh button if its error
// eslint
// theme error
// favicon in Next.js
// fix pokemon types everywhere
// suspense / loading

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
