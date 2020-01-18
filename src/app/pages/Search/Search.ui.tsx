import * as React from 'react';
import * as s from './Search.styles';
import { Link } from 'react-router-dom';

const UI: React.FC<{

}> = ({

}) => {

  return (
    <s.Container>
      <Link to='repo/id'>Go to Repo</Link>
    </s.Container>
  );
};
export default UI;
