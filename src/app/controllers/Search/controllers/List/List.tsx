import * as React from 'react';
import UI from './List.ui';
import { get, map } from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Repository } from 'types';

const List: React.FC<{
  repos: Repository[]
}> = ({
  repos
}) => {

  return (
    <UI
      repos={repos}
    />
  );
};

const getRepos = createSelector(
  state => get(state, 'models.Repository', {}),
  reposMap => map(reposMap, repo => repo)
);

const mapStateToProps = (state) => ({
  repos: getRepos(state)
});

export default connect(
  mapStateToProps
)(React.memo(List));
