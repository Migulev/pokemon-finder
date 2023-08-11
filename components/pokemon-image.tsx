'use client';

import Image from 'next/image';

type Props = {
  image: string;
  pokemonName: string;
};

const PokemonImage = ({ image, pokemonName }: Props) => {
  return (
    <Image
      src={image}
      alt={'picture of ' + pokemonName}
      priority
      fill
      style={{ objectFit: 'contain' }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    />
  );
};

export default PokemonImage;
