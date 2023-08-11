import PokemonImage from '@/components/pokemon-image';
import { Progress } from '@/components/ui/progress';
import { getPokemon } from '@/lib/pokemonAPI';

interface Props {
  params: {
    pokemonName: string;
  };
}

export default async function PokemonPage({ params }: Props) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  if (!pokemonObject) {
    return <span>Error</span>;
  }

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className="m-4 relative w-80 h-80">
        <PokemonImage
          image={pokemonObject.sprites.other['official-artwork'].front_default}
          pokemonName={pokemonName}
        />
      </div>
      <h3>Weight: {pokemonObject.weight}</h3>
      <div className="flex-col">
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div className="flex items-stretch w-[500px]">
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </>
  );
}
