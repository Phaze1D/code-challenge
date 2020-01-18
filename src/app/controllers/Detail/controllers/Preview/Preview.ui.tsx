import * as React from 'react';
import * as s from './Preview.styles';

const UI: React.FC<{
  hasMarkdown: boolean
}> = ({
  hasMarkdown
}) => {

  return (
    <s.Container>
      {hasMarkdown ? '' :
        <s.EmptyState>Looks like this repo doesn't have a Readme</s.EmptyState>
      }
    </s.Container>
  );
};
export default UI;
