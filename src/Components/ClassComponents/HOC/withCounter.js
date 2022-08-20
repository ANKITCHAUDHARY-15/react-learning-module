import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incermentCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incermentCount={this.incermentCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
