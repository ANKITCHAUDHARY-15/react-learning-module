import React, { Component } from "react";
import Children from "./Children";
import Children2 from "./Children2";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.fparentRef = React.createRef();
  }
  handleClick = () => {
    this.parentRef.current.alertMessage();
  };
  handleClick2 = () => {
    this.fparentRef.current.focus();
    this.fparentRef.current.placeholder = "Parent ref used";
  };
  render() {
    return (
      <div>
        <div className="border-blue-1 m-1 p-2">
          <strong>
            Using ref we can call children Component method from parent
            component
          </strong>
          <p>Parent compnent</p>
          <button onClick={this.handleClick}>Parent cta</button>
          <Children ref={this.parentRef} />
        </div>
        <div className="border-blue-1 m-1 p-2">
          <strong>We can forward ref from parent to children</strong>
          <p>Parent compnent</p>
          <button onClick={this.handleClick2}>Parent cta</button>
          <Children2 ref={this.fparentRef} />
        </div>
      </div>
    );
  }
}

export default Parent;
