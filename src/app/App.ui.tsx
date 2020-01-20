import * as React from 'react';
import * as s from './App.styles';
import Media from 'react-media';
import Detail from 'app/controllers/Detail';
import Search from 'app/controllers/Search';
import Intro from 'app/components/Intro';
import { theme } from 'styled';
import { Switch, Route } from 'react-router-dom';
import { DetailErrorBoundary } from './catchers';


const App: React.FC<{

}> = ({

}) => {

  return (
    <s.Container>
      <Media query={`(max-width: ${theme.breakpoints.mobile})`}>
        {matches => matches ?
          (
            <Switch>
                <Route
                  path='/repo/:id/:owner/:name'
                  render={props => (
                    <DetailErrorBoundary {...props}>
                      <Detail {...props} />
                    </DetailErrorBoundary>
                  )}
                />
              <Route path='/' component={Search} />
            </Switch>
          )
          :
          (
            <>
              <Route path='/' component={Search} />
              <Switch>
                <Route
                  path='/repo/:id/:owner/:name'
                  render={props => (
                    <DetailErrorBoundary {...props}>
                      <Detail {...props} />
                    </DetailErrorBoundary>
                  )}
                />
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
