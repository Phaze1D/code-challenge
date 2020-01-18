import * as React from 'react';
import loadable from '@loadable/component';


export default loadable(() => import('./Intro.ui'), {
  fallback: <div>Loading...</div>
});
