import React, { Component } from "react";

class Greet extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.greetText} {this.props.name}
        </h3>
        {this.props.isShowComponentDesc && (
          <p>I am a Class Component with default export</p>
        )}
      </div>
    );
  }
}
export default Greet;
