import MockAdapter from 'axios-mock-adapter';
import { searchRepos, __githubAxios, setToken } from '../github';

describe('Github API Config Test', () => {
  const mock = new MockAdapter(__githubAxios);

  test('Should match correct config without auth', async () => {
    mock.onGet(/\S/).reply(200, {});
    const res = await searchRepos({q: 'reacts'});
    expect(res.config.headers).toMatchSnapshot();
    expect(res.config.baseURL).toMatchSnapshot();
  });

  test('Should match correct config with auth', async () => {
    setToken('falsetoken923908-4325');
    mock.onGet(/\S/).reply(200);
    const res = await searchRepos({q: 'reacts'});
    expect(res.config.headers).toMatchSnapshot();
    expect(res.config.baseURL).toMatchSnapshot();
  });
});
