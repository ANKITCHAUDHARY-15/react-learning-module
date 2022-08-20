import React, { Component } from "react";

class Counter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incermentCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>{this.props.children(this.state.count, this.incermentCount)}</div>
    );
  }
}

export default Counter2;
