import React, { Component } from "react";
import { UserConsumer } from "./UserContext";


export class ComponentH extends Component {
  render() {
    return (
      <div className="border-purple-1 m-1 p-1">
        <div>ComponentH</div>
        <UserConsumer>
          {(userName) => {
            return <div>Hi {userName}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentH;
