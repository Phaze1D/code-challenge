import * as React from 'react';
import * as s from './App.styles';
import Media from 'react-media';
import Detail from 'app/controllers/Detail';
import Search from 'app/controllers/Search';
import Intro from 'app/components/Intro';
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
              <Route path='/repo/:id' component={Detail} />
              <Route path='/' component={Search} />
            </Switch>
          )
          :
          (
            <>
              <Route path='/' component={Search} />
              <Switch>
                <Route path='/repo/:id' component={Detail} />
                <Route path='/' component={Intro} />
              </Switch>
            </>
          )
        }
      </Media>
    </s.Container>
  );
};
export default App;
