import { AxiosResponse } from 'axios';
import { github } from 'api';
import { ReadmeParams } from 'types';
import { REPLACE_MANY, UPSERT_MANY } from 'store/actions/types';
import { buildAction } from 'store/actions/helpers';


export const readme = (
  params: ReadmeParams,
  replace = false
) => buildAction({
  params,
  apiMethod: github.getReadme,
  apiName: 'GET_README',
  apiID: '0',
  transform,
  replace
});

const transform = (res: AxiosResponse, replace = false) => {
  const {data, config} = res;

  const models = [{
    type: 'README',
    id: '0',
    data
  }];

  models.push({
    type: 'GET_README',
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
