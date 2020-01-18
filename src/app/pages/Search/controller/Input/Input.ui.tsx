import * as React from 'react';
import * as s from './Input.styles';

const UI: React.FC<{
  onChange: (value) => any
}> = ({
  onChange
}) => {

  const handleChange = React.useCallback(event => {
    const {value} = event.target;
    onChange(value);
  }, [onChange]);

  return (
    <s.Input
      type='search'
      placeholder='Search'
      onChange={handleChange}
    />
  );
};
export default UI;
