import React, { Component } from "react";
import ComponentH from "./ComponentH";
import UserContext from "./UserContext";

class ComponentG extends Component {
  // this can be used in place of ComponentG.contextType = UserContext; works same
  // static contextType = UserContext;
  render() {
    return (
      <div className="border-blue-1 m-1 p-2">
        <div>ComponentG</div>
        <div>
          <p>used contextType</p>
        </div>
        <div>ComponentG context : {this.context}</div>
        <ComponentH />
      </div>
    );
  }
}
ComponentG.contextType = UserContext;
export default ComponentG;
