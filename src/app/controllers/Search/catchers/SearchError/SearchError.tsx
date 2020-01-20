import * as React from 'react';
import * as s from './SearchError.styles';
import { get } from 'lodash';

class SearchError extends React.Component<{search: string}> {

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
    const {search} = this.props;
    if (search !== prev.search) this.setState({hasError: false, error: null});
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    return (
      <>
        {!hasError ? children :
          <s.Container>
            <s.Icon className='material-icons-round'>error</s.Icon>
            {get(error, 'response.data.message', error.message)}
          </s.Container>
        }
      </>
    );
  }
}
export default SearchError;
