import React, { Component } from "react";
import Children from "./Children";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "Parent Component",
      Writer: "ANKIT CHAUDHARY",
      Id: "1234554321",
      Desc: "Hellow, I am Parent Component Default Description",
    };
  }
  ChangeDesc = (event) => {
    let componentName = event.target.name;
    this.setState({
      Desc: `Hellow ,I am parent Component Desc and Changed by ${componentName} by calling parent Method`,
    });
  };
  render() {
    return (
      <div className="container border-blue-1 mt-2">
        <div className="row">
          <h3 className="align-center col-sm-12">Parent Child Component</h3>
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
          <Children changeDesc={this.ChangeDesc} />
        </div>
      </div>
    );
  }
}
