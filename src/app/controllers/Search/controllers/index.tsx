import * as React from 'react';
import loadable from '@loadable/component';
import Input from './Input/Input';

const List = loadable(() => import(/* webpackPreload: true */ './List/List'), {
  fallback: <div>Loading...</div>
});

export {
  Input,
  List
};
