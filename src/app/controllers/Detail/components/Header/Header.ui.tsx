import * as React from 'react';
import * as s from './Header.styles';
import Media from 'react-media';
import { Repository } from 'types';
import { theme } from 'styled';
import { get } from 'lodash';

const Header: React.FC<{
  repo: Repository
}> = ({
  repo
}) => {

  return (
    <s.Header>
      <Media
        query={`(max-width: ${theme.breakpoints.mobile})`}
        render={() => (
          <s.Back to='/'>
            <i className='material-icons-round'>arrow_back</i>
          </s.Back>
        )}
      />

      <s.RepoName>{repo.name}</s.RepoName>
      <s.Owner>
        {get(repo, 'owner.login')}
        <s.Avatar src={get(repo, 'owner.avatar_url')} />
      </s.Owner>
    </s.Header>
  );
};
export default React.memo(Header, (prev, next) => next.repo.id !== prev.repo.id);
