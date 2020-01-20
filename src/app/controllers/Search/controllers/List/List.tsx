import * as React from 'react';
import UI from './List.ui';
import { get, orderBy } from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Repository } from 'types';

const List: React.FC<{
  repos: Repository[]
  search: any
}> = ({
  repos,
  search
}) => {
  const {loading} = search;

  return (
    <UI
      loading={loading}
      repos={repos}
    />
  );
};

const getRepos = createSelector(
  state => get(state, 'models.Repository', {}),
  reposMap => orderBy(reposMap, 'score', 'desc')
);

const mapStateToProps = (state) => ({
  repos: getRepos(state),
  search: get(state, 'models.Search.0', {})
});

export default connect(
  mapStateToProps
)(React.memo(List));
