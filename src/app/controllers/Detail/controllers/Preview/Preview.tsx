import * as React from 'react';
import UI from './Preview.ui';
import { get } from 'lodash';
import { Repository, Readme, ReadmeParams } from 'types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { repository, clearModel as clearModelAction } from 'store/actions/models';
import { connect } from 'react-redux';
import { github } from 'api';
import { AxiosResponse } from 'axios';
import { decode } from 'utils';
import { useThrowError } from 'app/hooks';

const Preview: React.FC<{
  repo: Repository
  readme: Readme
  getReadme: (params: ReadmeParams) => any
  clearModel(name: string): any
}> = ({
  repo,
  readme,
  getReadme,
  clearModel
}) => {
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState('');
  const [onCatch] = useThrowError();
  const owner = get(repo, 'owner.login');
  const name = repo.name;
  const {sha} = readme;

  React.useEffect(() => {
    setLoading(true);
    if (owner && name) getReadme({owner, name}).catch(onCatch);

    return () => {
      setContent('');
      clearModel('README');
    };
  }, [owner, name]);

  React.useEffect(() => {
    if (readme.content) {
      const text = decode(readme.content, readme.encoding);
      github.getMarkdown({text})
        .then(onMarkdownSuccess)
        .catch(onCatch);
    }
  }, [sha]);

  const onMarkdownSuccess = React.useCallback((res: AxiosResponse) => {
    const {data} = res;
    setContent(data);
    setLoading(false);
  }, []);

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

const mapStateToProps = (state, props) => ({
  readme: getReadmeSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getReadme: repository.readme,
  clearModel: clearModelAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Preview));
