import React, { Component } from "react";

class Children extends Component {
  render() {
    return <div> {this.props.render()}</div>;
  }
}

export default Children;
