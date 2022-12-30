import { Leafwatch } from '@lib/leafwatch';
import clsx from 'clsx';
import { PublicationMainFocus } from 'lens';
import type { Dispatch, FC } from 'react';

interface Props {
  setFocus: Dispatch<any>;
  focus: string;
}

const FeedType: FC<Props> = ({ setFocus, focus }) => {
  interface FeedLinkProps {
    name: string;
    type?: string;
  }

  const FeedLink: FC<FeedLinkProps> = ({ name, type }) => (
    <button
      type="button"
      onClick={() => {
        setFocus(type);
        Leafwatch.track(`select_${(type ?? 'all_posts')?.toLowerCase()}_filter_in_explore`);
      }}
      className={clsx(
        { '!bg-pink-500 !text-white': focus === type },
        'text-xs bg-pink-100 bg-opacity-20 rounded-full px-3 sm:px-4 py-1.5 text-brand border border-brand-300 border-brand-500'
      )}
      aria-label={name}
    >
      {name}
    </button>
  );

  return (
    <div className="flex flex-wrap gap-3 px-5 mt-3 sm:px-0 sm:mt-0">
      <FeedLink name="All posts" />
      <FeedLink name="Images" type={PublicationMainFocus.Image} />
      <FeedLink name="Video" type={PublicationMainFocus.Video} />
    </div>
  );
};

export default FeedType;
