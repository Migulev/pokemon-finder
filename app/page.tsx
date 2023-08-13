import PokemonGrid from '@/components/pokemon-grid';
import { getPokemonList } from '@/lib/pokemonAPI';

// 2 languages
// theme error
// README.md

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
