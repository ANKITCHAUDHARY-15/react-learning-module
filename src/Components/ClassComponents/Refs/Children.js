import React, { Component } from "react";

class Children extends Component {
  alertMessage = () => {
    alert("Children Method Called");
  };
  render() {
    return (
      <div className="border-blue-1 m-1 p-2">
        <div>Children</div>
        <button onClick={this.alertMessage}>Click</button>
      </div>
    );
  }
}

export default Children;
