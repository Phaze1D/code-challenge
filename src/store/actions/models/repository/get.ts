import { AxiosResponse } from 'axios';
import { github } from 'api';
import { GetRepoParams } from 'types';
import { REPLACE_MANY, UPSERT_MANY } from 'store/actions/types';
import { buildAction } from 'store/actions/helpers';


export const get = (
  params: GetRepoParams,
  replace = false
) => buildAction({
  params,
  apiMethod: github.getRepo,
  apiName: 'GET_REPO',
  apiID: '0',
  transform,
  replace
});

const transform = (res: AxiosResponse, replace = false) => {
  const {data, config} = res;

  const models = [{
    type: 'Repository',
    id: data.id,
    data
  }];

  models.push({
    type: 'GET_REPO',
    id: '0',
    data: {
      loading: false,
      params: config.params
    }
  });

  return {
    type: replace ? REPLACE_MANY : UPSERT_MANY,
    payload: {models}
  };
};
