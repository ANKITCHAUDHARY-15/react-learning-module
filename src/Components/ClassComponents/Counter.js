import React, { Component } from "react";

//Useing state in class Component
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: {
        Count: props.count,
        CounterName: props.counterName,
        Message: "Click to change Count Value",
      },
      AuthorName: "ANKIT CHAUDHARY",
    };
    this.Description = "";
  }
  increaseCountWithousetState() {
    this.state.Counter.Count = this.state.Counter.Count + 1;
    console.log(
      "state incrememted by 1 ,state count Count value: " +
        this.state.Counter.Count
    );
    this.Description = "increment state by 1 directly(withoud setState method)";
    console.log("state count value changed but component does not render");
  }

  increaseCountWithsetState() {
    let count = this.state.Counter.Count + 1;
    this.setState(
      {
        Counter: { ...this.state.Counter, Count: count },
      },
      () => {
        console.log(
          "inside setState call back fun Count : " + this.state.Counter.Count
        );
      }
    );
    console.log(
      "State Count After increacing Count : " + this.state.Counter.Count
    );
    this.Description = "increment Count by setState Method by 1";
  }

  // this increase Count value only by one
  increaseFive() {
    this.increaseCountWithsetState();
    this.increaseCountWithsetState();
    this.increaseCountWithsetState();
    this.increaseCountWithsetState();
    this.increaseCountWithsetState();
    this.Description =
      "increaseCountWithsetState method call 5 times and count increase only by one => this behaviour , because react may group mutiple setState calls into a single update for better performance in our case all 5 setState calles are done in one single go and updated value does not carry over between different calles ";
  }
  increaseCountWithsetState_ChangeStateBaseOnPreviousState() {
    // second arguement may be props like this.setState((preState , props)=>....
    this.setState((preState) => ({
      Counter: { ...preState.Counter, Count: preState.Counter.Count + 1 },
    }));
    this.Description =
      "Whenever we want to change state base on previous state we need to pass a function as argument in setState method";
  }
  incrementFiveV2() {
    this.increaseCountWithsetState_ChangeStateBaseOnPreviousState();
    this.increaseCountWithsetState_ChangeStateBaseOnPreviousState();
    this.increaseCountWithsetState_ChangeStateBaseOnPreviousState();
    this.increaseCountWithsetState_ChangeStateBaseOnPreviousState();
    this.increaseCountWithsetState_ChangeStateBaseOnPreviousState();
  }
  render() {
    return (
      <div className={`${this.props.className} container pl-4`}>
        <div className="row">
          <h3 className="align-center col-sm-12">
            Processig state in class component
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-6">Props Count : {this.props.count}</div>
          <div className="col-sm-6">
            state Count : {this.state.Counter.Count}
          </div>
        </div>
        <div className="row">
          <div>{this.state.Counter.Message}</div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3 m-2">
            <button onClick={() => this.increaseCountWithousetState()}>
              Increase without setState
            </button>
          </div>
          <div className="col-sm-6 col-md-3 m-2">
            <button onClick={() => this.increaseCountWithsetState()}>
              Increase by setState
            </button>
          </div>
          <div className="col-sm-6 col-md-3 m-2">
            <button onClick={() => this.increaseFive()}>Increase by 5</button>
          </div>
          <div className="col-sm-6 col-md-3 m-2">
            <button onClick={() => this.incrementFiveV2()}>
              Increase by 5, passing a fun in setState
            </button>
          </div>
        </div>
        <div className="row m-2">
          <div>{this.Description}</div>
        </div>
      </div>
    );
  }
}
export default CounterComponent;
