import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { githubAxios } from 'api/github';
import { search } from '../search';

const mockStore = configureMockStore([thunk]);

describe('Actions - Search for Repos', () => {
  const mock = new MockAdapter(githubAxios);

  it('Should return correctly transform data', async () => {
    mock.onGet('/search/repositories').reply(200, fixtures);
    const store = mockStore();
    const results = await store.dispatch(search({q: 'react'}));
    expect(results).toMatchSnapshot();
  });

  it('Should catch error and return Error model', async () => {
    mock.onGet('/search/repositories').reply(400, fixtures);
    const store = mockStore();
    const results = await store.dispatch(search({q: 'react'}));
    expect(results).toMatchSnapshot();
  });
});


const fixtures = {
  total_count: 1157653,
  incomplete_results: false,
  items: [
    {
      id: 10270250,
      name: 'react',
      full_name: 'facebook/react'
    },
    {
      id: 10270256,
      name: 'react-hack',
      full_name: 'react-hack'
    }
  ]
};
