import Link from 'next/link';
import { ClassNameValue } from 'tailwind-merge';

type Props = {
  className?: ClassNameValue;
};

const Header = ({ className }: Props) => {
  return (
    <div
      className={` inline-block w-full max-w-5xl bg-background sticky top-0 lg:fixed lg:mt-16 lg:bg-transparent z-50 ${className}`}>
      <Link href="/">
        <h2 className="text-2xl text-bold">PokemonFinder</h2>
      </Link>
    </div>
  );
};

export default Header;
