import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserProvider } from "./UserContext";

class ComponentC extends Component {
  render() {
    return (
      <div className="border-purple-1 m-1 p-1">
        <div>ComponentC</div>
        <UserProvider value="ANKIT">
          <ComponentE />
        </UserProvider>
      </div>
    );
  }
}

export default ComponentC;
