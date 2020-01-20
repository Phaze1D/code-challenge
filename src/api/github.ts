import axios from 'axios';
import { SearchReposParams, GetRepoParams, GetMarkdownParams } from 'types';

export const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    common: {
      Accept: 'application/vnd.github.v3+json'
    }
  }
});


export const setToken = (token: string) => {
  githubAxios.defaults.headers.common.Authorization = `token ${token}`;
};


export const searchRepos = (params: SearchReposParams, cancelToken?) => {
  return githubAxios.get('/search/repositories', {params, cancelToken});
};

export const getRepo = (params: GetRepoParams, cancelToken?) => {
  const {owner, name} = params;
  return githubAxios.get(`/repos/${owner}/${name}`, {cancelToken});
};

export const getReadme = (params: GetRepoParams, cancelToken?) => {
  const {owner, name} = params;
  return githubAxios.get(`/repos/${owner}/${name}/readme`, {cancelToken});
};

export const getMarkdown = (data: GetMarkdownParams, cancelToken?) => {
  return githubAxios.post('/markdown', data, {cancelToken});
};
