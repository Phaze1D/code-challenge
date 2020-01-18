import * as React from 'react';
import UI from './Preview.ui';

const Preview: React.FC<{
  markdown?: string
}> = ({
  markdown
}) => {

  return (
    <UI />
  );
};
export default React.memo(Preview);
