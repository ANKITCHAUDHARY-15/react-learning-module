import React, { Component } from "react";

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

export default HoverCounter;
