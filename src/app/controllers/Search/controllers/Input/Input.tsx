import * as React from 'react';
import * as qs from 'query-string';
import UI from './Input.ui';
import { debounce, isEmpty } from 'lodash';
import { repository, clearAll as clearAllAction } from 'store/actions/models';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { SearchReposParams } from 'types';


const Input: React.FC<{
  search(param: SearchReposParams, replace?): any
  clearAll(): any
}> = ({
  search,
  clearAll
}) => {
  const debouceSearch = React.useRef(debounce(search, 250)).current;
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location.search).q as string;

  React.useEffect(() => {
    if (isEmpty(query)) {
      clearAll();
    } else {
      debouceSearch({q: query, per_page: 10, page: 0}, true);
    }
  }, [query]);

  const handleChange = React.useCallback(q => {
    const path = `/?${qs.stringify({q})}`;
    history.push(path);
  }, [history]);

  return (
    <UI
      query={query}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  search: repository.search,
  clearAll: clearAllAction
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(React.memo(Input));
