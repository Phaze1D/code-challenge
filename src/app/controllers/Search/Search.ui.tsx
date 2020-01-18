import * as React from 'react';
import * as s from './Search.styles';
import { Item } from './components';
import { Input } from './controller';
import { SearchResult } from 'types';

const UI: React.FC<{
  results: SearchResult[]
}> = ({
  results
}) => {

  const map = React.useCallback((result: SearchResult) => (
    <Item key={result.id} result={result} />
  ), []);

  return (
    <s.Container>
      <Input />

      {results.map(map)}
    </s.Container>
  );
};
export default UI;
