import * as React from 'react';
import * as s from './App.styles';
import Media from 'react-media';
import Repo from 'app/pages/Repo';
import Search from 'app/pages/Search';
import { theme } from 'styled';
import { Switch, Route } from 'react-router-dom';


const App: React.FC<{

}> = ({

}) => {

  return (
    <s.Container>
      <Media query={`(max-width: ${theme.breakpoints.mobile})`}>
        {matches => matches ?
          (
            <Switch>
              <Route path='/repo/:id' component={Repo} />
              <Route path='/' component={Search} />
            </Switch>
          )
          :
          (
            <>
              <Route path='/' component={Search} />
              <Route path='/repo/:id' component={Repo} />
            </>
          )
        }
      </Media>
    </s.Container>
  );
};
export default App;
