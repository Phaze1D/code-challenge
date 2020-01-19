import axios from 'axios';
import { SearchReposParams, GetRepoParams } from 'types';

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    common: {
      Accept: 'application/vnd.github.v3+json'
    }
  }
});
export const __githubAxios = githubAxios;


export const setToken = (token: string) => {
  githubAxios.defaults.headers.common.Authorization = `token ${token}`;
};


export const searchRepos = (params: SearchReposParams) => {
  return githubAxios.get('/search/repositories', {params});
};

export const getRepo = (params: GetRepoParams) => {
  const {owner, repo} = params;
  return githubAxios.get(`/repos/${owner}/${repo}`);
};
