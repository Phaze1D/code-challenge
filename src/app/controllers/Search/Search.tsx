import * as React from 'react';
import UI from './Search.ui';
import { RouteComponentProps } from 'react-router-dom';

const Search: React.FC<{

} & RouteComponentProps> = ({
  location
}) => {

  return (
    <UI
      search={location.search}
    />
  );
};
export default React.memo(Search);
