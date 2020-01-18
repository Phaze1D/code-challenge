import * as React from 'react';
import loadable from '@loadable/component';

const Input = loadable(() => import('./Input/Input'), {
  fallback: <div>Loading...</div>
});

export {
  Input
};
