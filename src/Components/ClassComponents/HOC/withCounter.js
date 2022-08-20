import React, { Component } from "react";

const withCounter = (WrappedComponent, counterValue) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incermentCount = () => {
      this.setState({
        count: this.state.count + (counterValue ? counterValue : 1)
      });
    };
    decrementCount = () => {
        this.setState({
          count: this.state.count - (counterValue ? counterValue : 1)
        });
      };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incermentCount={this.incermentCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
