import * as React from 'react';
import loadable from '@loadable/component';


export default loadable(() => import(/* webpackPrefetch: true */ './Detail'), {
  fallback: <div>Loading...</div>
});
