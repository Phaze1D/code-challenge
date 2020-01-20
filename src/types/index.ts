

export type Repository = {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    received_events_url: string
    type: string
  },
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  created_at: string
  updated_at: string
  pushed_at: string
  homepage: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  forks_count: number
  open_issues_count: number
  master_branch: string
  default_branch: string
  score: number
};


export type Readme = {
  'type': string
  'encoding': string
  'size': number,
  'name': string
  'path': string
  'content': string
  'sha': string
  'url': string
  'git_url': string
  'html_url': string
  'download_url': string
  '_links': {
    'git': string
    'self': string
    'html': string
  }
};


export type SearchReposParams = {
  q: string
  per_page?: number
  page?: number
  sort?: string
  order?: 'asc' | 'desc'
};

export type GetRepoParams = {
  owner: string
  name: string
};

export type PayloadModel = {
  id: string
  type: string
  data: any
};

export type GetMarkdownParams = {
  text: string
  mode?: 'markdown' | 'gfm'
  context?: string
};

export type ReadmeParams = GetRepoParams;
