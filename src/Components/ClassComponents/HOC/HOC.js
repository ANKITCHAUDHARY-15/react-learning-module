import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export class HOC extends Component {
  render() {
    return (
      <div>
        <h4 className="align-text-center">HOC</h4>
        <div>
          <div className="border-teal-1 m-1 p-2">
            <ClickCounter />
          </div>
          <div className="border-teal-1 m-1 p-2">
            <HoverCounter />
          </div>
        </div>
      </div>
    );
  }
}

export default HOC;
