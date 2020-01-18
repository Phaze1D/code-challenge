import * as React from 'react';
import * as s from './InfoSection.styles';
import { Repository } from 'types';

const InfoSection: React.FC<{
  repo: Repository
}> = ({
  repo
}) => (
  <s.InfoSection>
    <s.Info>
      <i className='material-icons-round'>remove_red_eye</i>
      {repo.watchers_count}
    </s.Info>

    <s.Info>
      <i className='material-icons-round'>star</i>
      {repo.stargazers_count}
    </s.Info>

    <s.Info>
      <i className='material-icons-round'>call_split</i>
      {repo.forks_count}
    </s.Info>

    <s.Info>
      <i className='material-icons-round'>error_outline</i>
      {repo.open_issues_count}
    </s.Info>
  </s.InfoSection>
);
export default React.memo(InfoSection);
