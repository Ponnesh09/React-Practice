// src/components/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Updates the state so the next render displays the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Logs error metadata to external tracking tools
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', border: '1px dashed red' }}>
          <h4>⚠️ An Error Occurred</h4>
          <p>{this.state.error?.message || "Failed to load this section."}</p>
          <button onClick={() => this.setState({ hasError: false })}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
