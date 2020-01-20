import { omit } from 'lodash';
import { AxiosResponse } from 'axios';
import { github } from 'api';
import { SearchReposParams } from 'types';
import { REPLACE_MANY, UPSERT_MANY, UPSERT, REPLACE } from 'store/actions/types';
import { handleRequestFail } from 'store/actions/helpers';


export const search = (params: SearchReposParams, replace = false) => {
  return (dispatch) => {
    dispatch(paginationAction(params)); // TODO: Need to add test for this
    return github.searchRepos(params)
      .then(res => dispatch(action(res, replace)))
      .catch(error => {
        dispatch({
          type: REPLACE,
          payload: {
            model: {
              type: 'Search',
              id: '0',
              data: {
                loading: false
              }
            }
          }
        });
        return dispatch(handleRequestFail(error));
      });
  };
};

const action = (res: AxiosResponse, replace = false) => {
  const {data, config} = res;
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
      params: config.params,
      loading: false
    }
  });

  return {
    type: replace ? REPLACE_MANY : UPSERT_MANY,
    payload: {models}
  };
};


const paginationAction = (params: SearchReposParams) => {
  return {
    type: UPSERT,
    payload: {
      model: {
        type: 'Search',
        id: '0',
        data: {
          params,
          loading: true
        }
      }
    }
  };
};
