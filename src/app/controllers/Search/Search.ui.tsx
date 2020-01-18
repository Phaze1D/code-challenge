import * as React from 'react';
import * as s from './Search.styles';
import { Input, List } from './controllers';

const UI: React.FC<{

}> = ({

}) => {


  return (
    <s.Container>
      <Input />
      <List />
    </s.Container>
  );
};
export default UI;
