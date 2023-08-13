'use client';

import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  image: string;
  pokemonName: string;
  className?: string;
};

const PokemonImage = ({ image, pokemonName, className }: Props) => {
  const [reveal, setReveal] = useState(false);
  const loader = reveal ? 'hidden' : 'visible';

  return (
    <div className={cn(className, 'relative flex justify-center items-center')}>
      <Image
        alt={'picture of ' + pokemonName}
        src={image}
        priority
        fill
        sizes="100%"
        style={{ objectFit: 'contain' }}
        className={'transition-opacity opacity-0 duration-300'}
        onLoadingComplete={(image) => {
          image.classList.remove('opacity-0');
          setReveal(true);
        }}
      />
      <span>
        <Loader2
          className={cn('h-10 w-10 animate-spin text-zinc-500', loader)}
        />
      </span>
    </div>
  );
};

export default PokemonImage;
