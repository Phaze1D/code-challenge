import * as React from 'react';
import UI from './Detail.ui';
import { Repository } from 'types';
import { get } from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const Detail: React.FC<{
  repo: Repository
} & RouteComponentProps<{id: string}>> = ({
  repo
}) => {

  return (
    <UI
      repo={repo}
    />
  );
};


const makeGetRepo = () => createSelector(
  (state, props) => get(state, `models.Repository.${props.match.params.id}`, {}),
  (repo) => repo
);  // TODO: NEED TO TEST THIS SELECTOR

const mapStateToProps = (state, props) => {
  const getRepo = makeGetRepo();
  return {
    repo: getRepo(state, props)
  };
};

export default connect(
  mapStateToProps
)(React.memo(Detail));
