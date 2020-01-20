import * as React from 'react';
import UI from './Detail.ui';
import { Repository, GetRepoParams } from 'types';
import { get, isEmpty } from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { repository } from 'store/actions/models';
import { useThrowError } from 'app/hooks';

const Detail: React.FC<{
  repo: Repository
  getRepo: (param: GetRepoParams) => any
} & RouteComponentProps<{id: string, owner: string, name: string}>> = ({
  repo,
  match,
  getRepo
}) => {
  const {owner, name} = match.params;
  const [onCatch] = useThrowError();

  React.useEffect(() => {
    if (isEmpty(repo)) getRepo({owner, name}).catch(onCatch);
  }, [owner, name]);

  return (
    <UI repo={repo} />
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

const mapDispatchToProps = dispatch => bindActionCreators({
  getRepo: repository.get
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Detail));
