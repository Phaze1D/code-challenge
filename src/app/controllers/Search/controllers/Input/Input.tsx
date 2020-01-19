import * as React from 'react';
import * as qs from 'query-string';
import UI from './Input.ui';
import { debounce } from 'lodash';
import { repository } from 'store/actions/models';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { SearchReposParams } from 'types';


const Input: React.FC<{
  search(param: SearchReposParams, replace?): any
}> = ({
  search
}) => {
  const debouceSearch = debounce(search, 250);
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location.search).q as string;

  React.useEffect(() => {
    debouceSearch({q: query, per_page: 5, page: 1}, true);
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
  search: repository.search
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(React.memo(Input));
