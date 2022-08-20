import React, { Component } from "react";
import ComponentD from "./ComponentD";

class ComponentB extends Component {
  render() {
    return (
      <div className="border-purple-1 m-1 p-1">
        <div>ComponentB</div>
        <ComponentD></ComponentD>
      </div>
    );
  }
}

export default ComponentB;
