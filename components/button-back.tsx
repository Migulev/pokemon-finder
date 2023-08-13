import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  href?: string;
  className?: string;
};

const BackButton = ({ className, href = '/' }: Props) => {
  return (
    <Link
      href={href}
      className={`text-sm rounded-lg border border-transparent m-3 px-6 py-1 transition-colors  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
      ${className}`}>
      <ChevronLeft />
    </Link>
  );
};

export default BackButton;
