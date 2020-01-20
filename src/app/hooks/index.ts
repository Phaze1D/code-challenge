import * as React from 'react';

export const useThrowError = () => {
  const [, setState] = React.useState(false);

  const onCatch = React.useCallback((err) => {
    setState(() => {
      throw err;
    });
  }, []);

  return [
    onCatch
  ];
};
