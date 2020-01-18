import * as React from 'react';
import loadable from '@loadable/component';

const Input = loadable(() => import(/* webpackPreload: true */ './Input/Input'), {
  fallback: <div>Loading...</div>
});

const List = loadable(() => import(/* webpackPreload: true */ './List/List'), {
  fallback: <div>Loading...</div>
});

export {
  Input,
  List
};
