import * as React from 'react';
import * as s from './Search.styles';
import { Input, List } from './controllers';
import { SearchErrorBoundary } from './catchers';

const UI: React.FC<{
  search: string
}> = ({
  search
}) => {


  return (
    <s.Container>
      <Input />
      <SearchErrorBoundary search={search}>
        <List />
      </SearchErrorBoundary>
    </s.Container>
  );
};
export default UI;
