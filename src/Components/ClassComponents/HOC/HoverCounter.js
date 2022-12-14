import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.incermentCount}>
          hover : {this.props.count} times
        </button>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
