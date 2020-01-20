import * as React from 'react';
import * as s from './SearchError.styles';

class SearchError extends React.Component {

  state = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {

  }

  componentDidUpdate(prev) {

  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    return (
      <>
        {!hasError ? children :
          <s.Container>
            <s.Icon className='material-icons-round'>error</s.Icon>
            {error.message}
          </s.Container>
        }
      </>
    );
  }
}
export default SearchError;
