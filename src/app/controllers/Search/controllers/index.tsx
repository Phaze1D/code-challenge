import loadable from '@loadable/component';
import Input from './Input/Input';

const List = loadable(() => import(/* webpackPreload: true */ './List/List'));

export {
  Input,
  List
};
