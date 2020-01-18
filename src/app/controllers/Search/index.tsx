import * as React from 'react';
import loadable from '@loadable/component';

export default loadable(() => import(/* webpackPreload: true */ './Search'), {
  fallback: <div>Loading...</div>
});
