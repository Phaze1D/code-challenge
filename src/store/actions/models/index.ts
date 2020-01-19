import * as repository from './repository';
import { CLEAR_ALL } from '../types';


export const clearAll = () => {
  return dispatch => dispatch({
    type: CLEAR_ALL
  });
};

export {
  repository
};
