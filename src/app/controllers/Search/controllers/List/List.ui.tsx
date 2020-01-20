import * as React from 'react';
import * as s from './List.styles';
import { Repository } from 'types';
import { Item } from '../../components';

const UI: React.FC<{
  repos: Repository[]
  loading: boolean
}> = ({
  repos,
  loading
}) => {

  const map = React.useCallback((repo: Repository) => (
    <Item key={repo.id} repo={repo} />
  ), []);

  return (
    <s.Container>
      {loading ? 'Loading' : repos.map(map)}
    </s.Container>
  );
};
export default UI;
