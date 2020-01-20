import * as React from 'react';
import * as qs from 'query-string';
import UI from './Input.ui';
import { debounce } from 'lodash';
import { repository, clearModel as clearModelAction } from 'store/actions/models';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { SearchReposParams } from 'types';
import { useThrowError } from 'app/hooks';


const Input: React.FC<{
  search(param: SearchReposParams, replace?): any
  clearModel(name: string): any
}> = ({
  search,
  clearModel
}) => {
  const debounceSearch = React.useRef(debounce(search, 350, {leading: true})).current;
  const history = useHistory();
  const location = useLocation();
  const [onThrow] = useThrowError();
  const query = qs.parse(location.search).q as string;

  React.useEffect(() => {
    const replace = history.action === 'PUSH';
    if (replace) clearModel('Repository');
    debounceSearch({q: query, per_page: 20, page: 1}, replace)
      .catch(onCatch);
  }, [query]);

  const handleChange = React.useCallback(q => {
    const path = `/?${qs.stringify({q})}`;
    history.push(path);
  }, [history]);

  const onCatch = React.useCallback((err) => {
    if (query) onThrow(err);
  }, [query]);

  return (
    <UI
      query={query}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  search: repository.search,
  clearModel: clearModelAction
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(React.memo(Input));
