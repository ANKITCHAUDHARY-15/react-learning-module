import React, { Component } from "react";
import Parent from "./Parent";
import ParentV2 from "./ParentV2";

export default class ParentChield extends Component {
  render() {
    return (
      <div className="ml-2 justify-content-between">
        <Parent />
        <hr/>
        <ParentV2/>
      </div>
    );
  }
}
