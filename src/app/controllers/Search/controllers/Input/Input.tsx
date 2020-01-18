import * as React from 'react';
import * as qs from 'query-string';
import UI from './Input.ui';
import { useHistory, useLocation } from 'react-router-dom';

const Input: React.FC<{

}> = ({

}) => {
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location.search).q;

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
export default React.memo(Input);
