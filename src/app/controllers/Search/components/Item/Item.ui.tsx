import * as React from 'react';
import * as s from './Item.styles';
import { Repository } from 'types';

const UI: React.FC<{
  result: Repository
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
