import * as React from 'react';
import * as s from './List.styles';
import { Repository } from 'types';
import { Item } from '../../components';

const UI: React.FC<{
  repos: Repository[]
}> = ({
  repos
}) => {

  const map = React.useCallback((repo: Repository) => (
    <Item key={repo.id} result={repo} />
  ), []);

  return (
    <s.Container>
      {repos.map(map)}
    </s.Container>
  );
};
export default UI;
