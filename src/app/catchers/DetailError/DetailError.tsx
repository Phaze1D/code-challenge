import * as React from 'react';
import * as s from './DetailError.styles';
import { RouteComponentProps } from 'react-router-dom';

class DetailError extends React.Component<RouteComponentProps> {

  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

  }

  componentDidUpdate(prev) {
    const {location} = this.props;
    if (location.pathname !== prev.location.pathname) {
      this.setState({hasError: false});
    }
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    return (
      <>
        {!hasError ? children :
          <s.Container>
            <s.Icon className='material-icons-round'>error</s.Icon>
            Looks like something went wrong while trying to view a repo
          </s.Container>
        }
      </>
    );
  }
}
export default DetailError;
