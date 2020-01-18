import * as React from 'react';
import * as s from './Detail.styles';
import { Repository } from 'types';
import { Header, InfoSection } from './components';
import { Preview } from './controllers';

const UI: React.FC<{
  repo: Repository
}> = ({
  repo
}) => {
  const link = repo.homepage || repo.html_url;

  return (
    <s.Container>
      <Header repo={repo} />

      <s.Divider />

      <s.Description>
        {repo.description} - {` `}
        <s.PageLink href={link} target='_blank'>
          {link}
        </s.PageLink>
      </s.Description>

      <InfoSection repo={repo} />

      <Preview />
    </s.Container>
  );
};
export default UI;
