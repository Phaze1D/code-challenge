import * as React from 'react';
import UI from './Detail.ui';
import { Repository } from 'types';
import { RouteComponentProps } from 'react-router-dom';

const Detail: React.FC<{

} & RouteComponentProps<{id: string}>> = ({

}) => {

  return (
    <UI
      repo={{} as Repository}
    />
  );
};
export default React.memo(Detail);
