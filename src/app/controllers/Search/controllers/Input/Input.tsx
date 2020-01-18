import * as React from 'react';
import * as qs from 'query-string';
import UI from './Input.ui';
import { debounce } from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';

const Input: React.FC<{

}> = ({

}) => {
  const history = useHistory();
  const location = useLocation();
  const defaultValue = qs.parse(location.search).q;

  const handleChange = React.useCallback(q => {
    const path = `${location.pathname}?${qs.stringify({q})}`;
    history.push(path);
  }, [location, history]);

  return (
    <UI
      defaultValue={defaultValue}
      onChange={debounce(handleChange, 250)}
    />
  );
};
export default React.memo(Input);
