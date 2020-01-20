import * as React from 'react';
import UI from './Preview.ui';
import { get } from 'lodash';
import { Repository, Readme, ReadmeParams } from 'types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { repository } from 'store/actions/models';
import { connect } from 'react-redux';
import { github } from 'api';
import { AxiosResponse } from 'axios';
import { decode } from 'utils';

const Preview: React.FC<{
  repo: Repository
  readme: Readme
  getReadme: (params: ReadmeParams) => any
}> = ({
  repo,
  readme,
  getReadme
}) => {
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState('');
  const owner = get(repo, 'owner.login');
  const name = repo.name;
  const {sha} = readme;

  React.useEffect(() => {
    setContent('');
    setLoading(true);
    if (owner && name) getReadme({owner, name});
  }, [owner, name]);

  React.useEffect(() => {
    if (readme.content) {
      const text = decode(readme.content, readme.encoding);
      github.getMarkdown({text})
        .then(onMarkdownSuccess)
        .finally(onMarkdownFinally);
    }
  }, [sha]);

  const onMarkdownSuccess = React.useCallback((res: AxiosResponse) => {
    const {data} = res;
    setContent(data);
  }, []);

  const onMarkdownFinally = React.useCallback(() => setLoading(false), []);

  return (
    <UI
      content={content}
      loading={loading}
    />
  );
};

const getReadmeSelector = createSelector(
  (state) => get(state, `models.README.0`, {}),
  (readme) => readme
);

const mapStateToProps = (state, props) => {
  return {
    readme: getReadmeSelector(state)
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getReadme: repository.readme
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Preview));
