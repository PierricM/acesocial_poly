import clsx from 'clsx';
import type { FC } from 'react';

interface Props {
  slug: string;
  prefix?: string;
  className?: string;
}

const Slug: FC<Props> = ({ slug, prefix, className = '' }) => {
  return (
    <span
      className={clsx(
        'text-transparent bg-clip-text bg-gradient-to-r from-brand-600 from-brand-400 to-pink-600 to-pink-400',
        className
      )}
    >
      {prefix}
      {slug}
    </span>
  );
};

export default Slug;
