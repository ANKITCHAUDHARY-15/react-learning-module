import React, { Component } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

class Context extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h3 className="align-text-center">Context</h3>
            <div>
              <ComponentA />
            </div>
            <div>
              <ComponentC />
            </div>
            <div>
              <ComponentB />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Context;
