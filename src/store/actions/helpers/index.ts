import { UPSERT } from 'store/actions/types';


export const handleRequestFail = (error) => {
  return {
    type: UPSERT,
    payload: {
      model: {
        type: 'Error',
        id: '234',
        data: {
          error,
          alertMessage: 'Something seems to have gone wrong'
        }
      }
    }
  };
};
