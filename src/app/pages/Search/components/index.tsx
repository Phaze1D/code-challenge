import * as React from 'react';
import loadable from '@loadable/component';

const Item = loadable(() => import('./Item/Item.ui'), {
  fallback: <div>Loading...</div>
});

export {
  Item
};
