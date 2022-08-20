import React, { Component } from "react";
import ComponentF from "./ComponentF";

export class ComponentE extends Component {
  render() {
    return (
      <div className="border-purple-1 m-1 p-1">
        <div>ComponentE</div>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
