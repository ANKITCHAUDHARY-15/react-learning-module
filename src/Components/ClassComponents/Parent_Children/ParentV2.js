import React, { Component } from "react";
import ChildrenV2 from "./ChildrenV2";

/**
 * Getting parameter from child componenets
 **/
export default class ParentV2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "Parent Component",
      Writer: "ANKIT CHAUDHARY",
      Id: "12345",
      Desc: "Hellow, I am Parent Component Default Description",
    };
  }
  ChangeDesc = (name, desc) => {
    this.setState({
      Desc: `Hellow ,I am parent Component Desc and Changed by ${name} by calling parent Method. chield passed Desc : ${desc}`,
    });
  };
  render() {
    return (
      <div className="border-blue-1 p-2 m-2">
        <div className="row ">
          <h4 className="align-center col-sm-12">Parent Child Component V2</h4>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div>Component Name : {this.state.Name}</div>
            <div>Component Id : {this.state.Id}</div>
            <button onClick={this.ChangeDesc} name="parnet Component">
              Change Desc
            </button>
          </div>
          <div className="col-md-6 col-sm-12">
            <div>Component Desc : {this.state.Desc}</div>
          </div>
        </div>
        <div className="row border-blue-1 m-2">
          <ChildrenV2 changeDesc={this.ChangeDesc} />
        </div>
      </div>
    );
  }
}
