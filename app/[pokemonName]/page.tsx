import PokemonImage from '@/components/pokemon-image';
import { Progress } from '@/components/ui/progress';
import { getPokemon } from '@/lib/pokemonAPI';
import BackButton from '@/components/button-back';

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
    <div className="relative mt-1 md:mt-10 w-full md:w-fit">
      <BackButton className="absolute mt-4" />
      <h1 className="text-2xl md:text-4xl text-center text-bold pt-4 mb-3">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <PokemonImage
        className="m-auto h-64 md:w-80 lg:h-80"
        image={pokemonObject.sprites.other['official-artwork'].front_default}
        pokemonName={pokemonName}
      />
      <h3 className="text-center mb-3 md:mb-8">
        Weight: {pokemonObject.weight}
      </h3>
      <div className="flex-col">
        {pokemonObject.stats.map((statObject: any, i: number) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div className="flex flex-col md:flex-row md:w-[500px]" key={i}>
              <h3 className="p-3 md:w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress
                className="h-2 md:h-4 md:w-2/4 m-auto"
                value={statValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
