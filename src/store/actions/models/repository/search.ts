import { omit } from 'lodash';
import { AxiosResponse } from 'axios';
import { github } from 'api';
import { SearchReposParams } from 'types';
import { REPLACE_MANY, UPSERT_MANY, UPSERT } from 'store/actions/types';
import { handleRequestFail } from 'store/actions/helpers';


export const search = (params: SearchReposParams, replace = false) => {
  return dispatch => {
    dispatch({type: UPSERT, payload: {model: {
      type: 'Search',
      id: '0',
      data: {loading: true}
    }}});
    return github.searchRepos(params)
      .then(res => dispatch(action(res, replace)))
      .catch(error => dispatch(handleRequestFail(error)));
  };
};

const action = (res: AxiosResponse, replace = false) => {
  const {data} = res;

  const models = data.items.map(repo => ({
    type: 'Repository',
    id: repo.id,
    data: repo
  }));

  models.push({
    type: 'Search',
    id: '0',
    data: {
      ...omit(data, 'items'),
      loading: false
    }
  });

  return {
    type: replace ? REPLACE_MANY : UPSERT_MANY,
    payload: {models}
  };
};
