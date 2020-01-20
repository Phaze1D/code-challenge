import * as React from 'react';
import * as s from './List.styles';
import { Item } from '../../components';
import { Repository } from 'types';

const UI: React.FC<{
  repos: Repository[]
  loading: boolean
  hasMore: boolean
  onLoadMore(): any
}> = ({
  repos,
  loading,
  hasMore,
  onLoadMore
}) => {
  const hasRepos = repos.length > 0;

  const genItem = React.useCallback((index) => {
    if (hasRepos) return <Item repo={repos[index]} />;
    return null;
  }, [repos]);

  const genKey = React.useCallback((index) => {
    if (hasRepos) return repos[index].id;
    return 0;
  }, [repos]);

  return (
    <>
      {hasRepos ?
        <s.Container
          totalCount={repos.length}
          item={genItem}
          itemHeight={91}
          overscan={3}
          computeItemKey={genKey}
          footer={() => hasMore ? <Footer loading={loading} onClick={onLoadMore} /> : null}
        />
        :
        <s.EmptyState>
          {loading && 'Loading'}
        </s.EmptyState>
      }
    </>
  );
};
export default UI;


const Footer: React.FC<{
  loading: boolean
  onClick(): any
}> = ({
  loading,
  onClick
}) => (
  <s.LoadButton
    disabled={loading}
    onClick={onClick}
    style={{boxShadow: loading ? 'none' : ''}}
  >
    {loading ? 'Loading...' : 'Load More'}
  </s.LoadButton>
);
