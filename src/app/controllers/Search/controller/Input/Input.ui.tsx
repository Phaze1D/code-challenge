import * as React from 'react';
import * as s from './Input.styles';

const UI: React.FC<{
  defaultValue?: string | string[]
  onChange: (value) => any
}> = ({
  defaultValue,
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
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};
export default UI;
