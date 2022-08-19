import React, { Component } from "react";

export default class MultipleCreateRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
    this.inputRef3 = React.createRef();
  }
  handleSubmit = () => {
    alert(
      `Name ${this.inputRef1.current.value} Collage ${this.inputRef2.current.value} City ${this.inputRef3.current.value}`
    );
  };
  render() {
    return (
      <div className="border-blue-1 m-1 p-2">
        <div>
          <h4>Multiple Ref</h4>
        </div>
        <label>Name</label>
        <input ref={this.inputRef1} />
        <label>Collage</label>
        <input ref={this.inputRef2} />
        <label>City</label>
        <input ref={this.inputRef3} />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
