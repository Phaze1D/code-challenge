import axios from 'axios';
import { SearchParams } from 'types';

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


export const searchRepos = (params: SearchParams) => {
  return githubAxios.get('/search/repositories', {params});
};
