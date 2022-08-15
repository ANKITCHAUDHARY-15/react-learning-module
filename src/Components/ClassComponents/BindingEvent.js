import React, { Component } from "react";

class BindingEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Hello , i am constructor message",
    };
    this.clickHandler = this.changeMessageV4.bind(this);
  }
  changeMessage() {
    console.log("this : " + this);
    console.log(
      "this is undefine here we need to bind event to access this keyword feature"
    );
  }
  changeMessageV2() {
    this.setState({
      Message:
        "Hi Message change by event (binding in render method) => onClick={this.changeMessageV2.bind(this)} => on every state change this component re rendered due to this every time new event handler created not good for large project",
    });
    console.log(this);
  }
  changeMessageV3() {
    this.setState({
      Message:
        "Hi Message change by event(arrow function) =>  onClick={() => this.changeMessageV3()} =>on every state change this component re rendered. every time new arrow fun created , poor performance",
    });
    console.log(this);
  }
  changeMessageV4() {
    this.setState({
      Message:
        "Hi Message change by event =>  Binding in class constructor => in constructor : this.clickHandler= this.changeMessageV4.bind(this) => and in call : onClick={this.clickHandler} => it is an efficient way of binndg event handler bzc binding only one time in class constructor",
    });
    console.log(this);
  }
  changeMessageV5 = () => {
    this.setState({
      Message:
        "Hi Message change by event => class property as arrow function : changeMessageV5 = () => {//...} and call : onClick={this.changeMessageV5} ",
    });
    console.log(this);
  };
  render() {
    return (
      <div className="container border-blue-1 mt-2">
        <div className="row">
          <h3 className="align-center col-sm-12">Binding Event Handler</h3>
        </div>
        <div className="row">
          <div className="ml-2">{this.state.Message}</div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-md-2 m-2">
            <button onClick={this.changeMessage}>
              Click me and check console log
            </button>
            <p>
              onClick="this.changeMessage" <br />
              this is undefine here we need to bind event to access this keyword
              feature
            </p>
          </div>
          <div className="col-sm-3 col-md-2 m-2">
            <button onClick={this.changeMessageV2.bind(this)}>Click me</button>
          </div>
          <div className="col-sm-3 col-md-2 m-2">
            <button onClick={() => this.changeMessageV3()}>Click me</button>
          </div>
          <div className="col-sm-3 col-md-2 m-2">
            <button onClick={this.clickHandler}>Click me</button>
          </div>
          <div className="col-sm-3 col-md-2 m-2">
            <button onClick={this.changeMessageV5}>Click me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BindingEvent;
