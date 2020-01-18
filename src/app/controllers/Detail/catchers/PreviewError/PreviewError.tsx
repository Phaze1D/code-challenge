import * as React from 'react';
import * as s from './PreviewError.styles';

class PreviewError extends React.Component {

  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    return (
      <>
        {!hasError ? children :
          <s.Container>
            <s.Icon className='material-icons-round'>error</s.Icon>
            Looks like something went wrong while trying to preview the Readme file
          </s.Container>
        }
      </>
    );
  }
}
export default PreviewError;
