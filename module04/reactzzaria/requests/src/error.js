import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log('error getDerivedStateFromError:', error.message);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('error:', error);
    console.log('info:', info.componentStack);
  }

  render() {
    return this.props.children(this.state.hasError);
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.func.isRequired,
};
