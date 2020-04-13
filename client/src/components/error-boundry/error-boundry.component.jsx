import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundry.styles';

class ErrorBoundry extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/hkRuanu.png'} />
          <ErrorImageText>
              Ops!...Sorry, something went wrong. This page is maybe just a myth?
          </ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundry;