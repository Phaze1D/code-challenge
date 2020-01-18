import * as React from 'react';
import * as s from './Item.styles';
import { get } from 'lodash';
import { Repository } from 'types';
import { useLocation } from 'react-router-dom';

const Item: React.FC<{
  repo: Repository
}> = ({
  repo
}) => {
  const location = useLocation();

  return (
    <s.Card
      activeClassName='active'
      to={{
        pathname: `/repo/${repo.id}`,
        search: location.search
      }}
    >
      <s.Name>
        <s.RepoName>{repo.name}</s.RepoName>
        <s.OwnerName> - {get(repo, 'owner.login')}</s.OwnerName>
      </s.Name>

      <s.Description>{repo.description}</s.Description>
      <s.Date>Pushed At - {new Date(repo.pushed_at).toLocaleDateString()}</s.Date>
    </s.Card>
  );
};
export default React.memo(Item, (prev, next) => next.repo.id !== prev.repo.id);
