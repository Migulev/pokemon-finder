import Link from 'next/link';
import { ClassNameValue } from 'tailwind-merge';

type Props = {
  className?: ClassNameValue;
};

const Header = ({ className }: Props) => {
  return (
    <div className={`w-full max-w-5xl ${className}`}>
      <Link href="/">
        <h2 className="text-2xl text-bold">PokemonFinder</h2>
      </Link>
    </div>
  );
};

export default Header;
