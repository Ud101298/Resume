import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          color: '#fff',
          background: 'rgba(255, 0, 0, 0.1)',
          borderRadius: '8px',
          margin: '20px'
        }}>
          <h2>Something went wrong!</h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: '#7cd1b8',
              border: 'none',
              borderRadius: '50px',
              color: '#1a1a2e',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
