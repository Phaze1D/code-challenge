import * as React from 'react';
import loadable from '@loadable/component';

export default loadable(() => import('./Search'), {
  fallback: <div>Loading...</div>
});
