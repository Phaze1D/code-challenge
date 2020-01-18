import * as React from 'react';
import UI from './Detail.ui';
import { Repository } from 'types';
import { RouteComponentProps } from 'react-router-dom';

const Detail: React.FC<{

} & RouteComponentProps<{id: string}>> = ({

}) => {

  return (
    <UI
      repo={test}
    />
  );
};
export default React.memo(Detail);

const test: Repository = {
  id: 3081286,
  node_id: 'MDEwOlJlcG9zaXRvcnkzMDgxMjg2',
  name: 'Tetris',
  full_name: 'dtrupenn/Tetris',
  owner: {
    login: 'dtrupenn',
    id: 872147,
    node_id: 'MDQ6VXNlcjg3MjE0Nw==',
    avatar_url: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    gravatar_id: '',
    url: 'https://api.github.com/users/dtrupenn',
    received_events_url: 'https://api.github.com/users/dtrupenn/received_events',
    type: 'User'
  },
  private: false,
  html_url: 'https://github.com/dtrupenn/Tetris',
  description: 'A C implementation of Tetris using Pennsim through LC4 Really Really Long descritions',
  fork: false,
  url: 'https://api.github.com/repos/dtrupenn/Tetris',
  created_at: '2012-01-01T00:31:50Z',
  updated_at: '2013-01-05T17:58:47Z',
  pushed_at: '2012-01-01T00:37:02Z',
  homepage: '',
  size: 524,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'Assembly',
  forks_count: 0,
  open_issues_count: 0,
  master_branch: 'master',
  default_branch: 'master',
  score: 10.309712
};
