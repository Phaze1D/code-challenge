import * as React from 'react';
import * as s from './Preview.styles';

const UI: React.FC<{
  content: string
  loading: boolean
}> = ({
  content,
  loading
}) => {

  return (
    <s.Container>
      {content ?
        <div dangerouslySetInnerHTML={{__html: content}} /> :
        <s.EmptyState>
          {loading ? 'Loading' : `Looks like this repo doesn't have a Readme`}
        </s.EmptyState>
      }
    </s.Container>
  );
};
export default UI;
