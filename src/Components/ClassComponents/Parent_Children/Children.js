import React, { Component } from "react";

export default class Children extends Component {
  render() {
    return (
      <div>
          <div>Child Component: </div>
        <div className="row m-2">
          <button onClick={this.props.changeDesc} name="Child Component"> Call Parnet Method</button>
        </div>
      </div>
    );
  }
}
