import * as React from 'react';
import UI from './List.ui';
import { get, orderBy, isEmpty } from 'lodash';
import { repository } from 'store/actions/models';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Repository, SearchReposParams } from 'types';
import { bindActionCreators } from 'redux';

const List: React.FC<{
  repos: Repository[]
  searchModel: any
  search(param: SearchReposParams, replace?): any
}> = ({
  repos,
  searchModel,
  search
}) => {
  const {loading, total_count, params, error} = searchModel;

  const q = get(error, 'response.config.params.q', '');
  if (error && !isEmpty(q)) throw error;

  const handleLoadMore = React.useCallback(() => {
    search({...params, page: get(params, 'page', 0) + 1});
  }, [params]);

  return (
    <UI
      loading={loading && get(params, 'q')}
      repos={repos}
      hasMore={repos.length < total_count}
      onLoadMore={handleLoadMore}
    />
  );
};

const getRepos = createSelector(
  state => get(state, 'models.Repository', {}),
  reposMap => orderBy(reposMap, 'score', 'desc')
);  // TODO: NEED TO TEST THIS SELECTOR

const mapStateToProps = (state) => ({
  repos: getRepos(state),
  searchModel: get(state, 'models.Search.0', {})
});

const mapDispatchToProps = dispatch => bindActionCreators({
  search: repository.search
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(List));
