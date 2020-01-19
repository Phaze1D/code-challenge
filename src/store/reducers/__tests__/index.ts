import { UPSERT, REPLACE, UPSERT_MANY, REMOVE, REPLACE_MANY, REMOVE_MANY } from 'store/actions/types';
import { reducer, INITIAL_STATE } from '../index';


describe('Testing reducer', () => {

  describe('Testing Single Model', () => {
    const model = {
      type: 'Repo',
      id: 'repoid',
      data: {name: 'Hello World'}
    };

    it('Should add new model', () => {
      const nState = reducer(INITIAL_STATE, {type: UPSERT, payload: {model}});
      expect(nState).toMatchSnapshot();
    });

    it('Should update new model', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT, payload: {model}});
      const nModel = {...model, data: {newData: 'Hello New Data'}};
      const nState = reducer(state, {type: UPSERT, payload: {model: nModel}});
      expect(nState).toMatchSnapshot();
    });

    it('Should replace model', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT, payload: {model}});
      const nModel = {...model, data: {newData: 'Hello New Data'}};

      const nState = reducer(state, {type: REPLACE, payload: {model: nModel}});
      expect(nState).toMatchSnapshot();
    });

    it('Should remove model', () => {
      const state = reducer(INITIAL_STATE, {type: REMOVE, payload: {model}});
      expect(state).toMatchSnapshot();
    });
  });

  describe('Testing Multiple Models', () => {
    const models = [
      {
        type: 'Repo',
        id: 1,
        data: {name: 'Hello There'}
      },
      {
        type: 'Repo',
        id: 5,
        data: {name: 'General Kenobi'}
      },
      {
        type: 'Dumb',
        id: 5,
        data: {name: 'JarJar'}
      }
    ];

    it('Should Add Multiple', () => {
      const nState = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      expect(nState).toMatchSnapshot();
    });

    it('Should Update Multiple', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      const nModels = models.map(m => ({...m, data: {newData: 'welcome'}}));
      nModels.pop();

      const nState = reducer(state, {type: UPSERT_MANY, payload: {models: nModels}});
      expect(nState).toMatchSnapshot();
    });

    it('Should Replace Multiple', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      const nModels = models.map(m => ({...m, data: {newData: 'welcome'}}));
      nModels.pop();

      const nState = reducer(state, {type: REPLACE_MANY, payload: {models: nModels}});
      expect(nState).toMatchSnapshot();
    });

    it('Should Remove Multiple', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      models.pop();
      const nState = reducer(state, {type: REMOVE_MANY, payload: {models}});
      expect(nState).toMatchSnapshot();
    });
  });
});
