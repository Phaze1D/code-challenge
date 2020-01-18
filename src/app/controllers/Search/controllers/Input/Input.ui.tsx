import * as React from 'react';
import * as s from './Input.styles';

const UI: React.FC<{
  query?: string | string[]
  onChange: (value) => any
}> = ({
  query = '',
  onChange
}) => {

  const handleChange = React.useCallback(event => {
    const {value} = event.target;
    onChange(value);
  }, [onChange]);

  return (
    <s.Wrapper>
      <s.Icon className='material-icons-round'>search</s.Icon>
      <s.Input
        type='search'
        placeholder='Search'
        value={query}
        onChange={handleChange}
      />
    </s.Wrapper>
  );
};
export default UI;
