import ThreadBody from '@components/Publication/ThreadBody';
import type { SphrexPublication } from '@generated/types';
import type { Comment, FeedItem } from 'lens';
import type { FC } from 'react';

interface Props {
  feedItem: FeedItem;
}

const Commented: FC<Props> = ({ feedItem }) => {
  const publication = feedItem.root as Comment;
  const firstComment = feedItem.comments && feedItem.comments[0];

  return firstComment ? (
    <ThreadBody publication={publication as SphrexPublication} />
  ) : publication?.commentOn ? (
    <ThreadBody publication={publication?.commentOn as SphrexPublication} />
  ) : null;
};

export default Commented;
