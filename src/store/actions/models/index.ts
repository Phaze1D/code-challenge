import * as repository from './repository';
import { CLEAR_ALL, CLEAR_MODEL } from '../types';


export const clearAll = () => {
  return dispatch => dispatch({
    type: CLEAR_ALL
  });
};

export const clearModel = name => {
  return dispatch => dispatch({
    type: CLEAR_MODEL,
    payload: {name}
  });
};

export {
  repository
};
