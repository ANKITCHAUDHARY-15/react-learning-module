import React, { Component } from "react";
import { LogInfo, LogError } from "../../FunctionalComponents/CommonMethod";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    LogError(error);
    LogInfo(info);
  }
  render() {
    if (this.state.hasError) {
      return <div className="border-red-1 color-red">Something went wrong</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
