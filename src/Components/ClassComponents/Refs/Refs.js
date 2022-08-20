import React, { Component } from "react";
import CreateRef from "./CreateRef";
import MultipleCreateRef from "./MultipleCreateRef";
import Parent from "./Parent";

export default class Refs extends Component {
  render() {
    return (
      <>
        <h3 className="align-text-center m-2">Refs</h3>
        <div>
          <div>
            <CreateRef />
            <MultipleCreateRef />
            <Parent />
          </div>
        </div>
      </>
    );
  }
}
