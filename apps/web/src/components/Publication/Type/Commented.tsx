import type { SphrexPublication } from '@generated/types';
import type { FC } from 'react';

import ThreadBody from '../ThreadBody';

interface Props {
  publication: SphrexPublication;
}

const Commented: FC<Props> = ({ publication }) => {
  const commentOn: SphrexPublication | any = publication?.commentOn;
  const mainPost = commentOn?.mainPost;

  return (
    <>
      {mainPost ? <ThreadBody publication={mainPost} /> : null}
      <ThreadBody publication={commentOn} />
    </>
  );
};

export default Commented;
