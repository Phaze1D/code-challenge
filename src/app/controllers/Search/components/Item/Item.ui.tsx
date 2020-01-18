import * as React from 'react';
import * as s from './Item.styles';
import { SearchResult } from 'types';

const UI: React.FC<{
  result: SearchResult
}> = ({
  result
}) => {

  return (
    <s.Card>
      Item
    </s.Card>
  );
};
export default UI;
