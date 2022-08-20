import React, { Component } from "react";
import ComponentG from "./ComponentG";
import { UserConsumer } from "./UserContext";
import ComponentF from "./ComponentF";
import { UserProvider } from "./UserContext";

class ComponentD extends Component {
  render() {
    return (
      <div className="border-purple-1 m-1 p-1">
        <div>ComponentD</div>
        <UserConsumer>
          {(userName) => {
            return <div>Hi {userName}</div>;
          }}
        </UserConsumer>
        <UserProvider value="ANKIT_CHAUDHARY">
          <ComponentG />
        </UserProvider>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentD;
