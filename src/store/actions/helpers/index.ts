import axios, { AxiosError } from 'axios';
import { get } from 'lodash';
import { REPLACE, REPLACE_MANY, UPSERT } from 'store/actions/types';


// TODO: NEEDS TEST
export const buildAction = ({
  params,
  apiMethod,
  apiName,
  apiID,
  replace,
  transform
}) => {
  return (dispatch, getState) => {
    const state = getState();
    const request = get(state, ['models', apiName, apiID], {});
    const loading = get(request, 'loading', false);
    let cancelSource = get(request, 'cancelSource');

    if (loading && cancelSource) {
      cancelSource.cancel('CANCELED');
      cancelSource = axios.CancelToken.source();
    }

    if (!cancelSource) cancelSource = axios.CancelToken.source();

    dispatch(handleRequestStart({params, apiID, apiName, cancelSource, replace}));

    return apiMethod(params, cancelSource.token)
      .then(res => dispatch(transform(res, replace)))
      .catch((error: AxiosError) => {
        if (axios.isCancel(error)) return;
        dispatch(handleRequestFail({error, apiID, apiName}));
        return Promise.reject(error);
      });
  };
};

const handleRequestStart = ({params, apiID, apiName, cancelSource, replace}) => {
  return {
    type: replace ? REPLACE : UPSERT,
    payload: {
      model: {
        type: apiName,
        id: apiID,
        data: {
          params,
          cancelSource,
          loading: true
        }
      }
    }
  };
};


const handleRequestFail = ({error, apiID, apiName}) => {
  return {
    type: REPLACE_MANY,
    payload: {
      models: [
        {
          type: 'Error',
          id: apiID,
          data: {
            error,
            alertMessage: 'Something seems to have gone wrong'
          }
        },
        {
          type: apiName,
          id: apiID,
          data: {
            loading: false
          }
        }
      ]
    }
  };
};
