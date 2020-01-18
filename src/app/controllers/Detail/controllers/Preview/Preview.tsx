import * as React from 'react';
import UI from './Preview.ui';
import { isEmpty } from 'lodash';

const Preview: React.FC<{
  markdown?: string
}> = ({
  markdown = ''
}) => {

  return (
    <UI
      hasMarkdown={!isEmpty(markdown)}
    />
  );
};
export default React.memo(Preview);
