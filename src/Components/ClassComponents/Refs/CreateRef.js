import React, { Component } from "react";

class CreateRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    //2
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    this.inputRef.current.placeholder = "Name";
    //2
    if (this.cbRef) {
      this.cbRef.placeholder = "Enter Name";
    }
  }
  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  handleClick2 = () => {
    alert(this.cbRef.value);
  };

  render() {
    return (
      <div className="border-blue-1 m-1 p-2 row">
        <div className="col-sm-6">
          <h5>React.createRef()</h5>
          <input ref={this.inputRef} />
          <button onClick={this.handleClick} className="ml-2">
            click
          </button>
        </div>
        {/* 2 */}
        <div className="col-sm-6">
          <h5>Call Back ref approach</h5>
          <input ref={this.setcbRef} />
          <button onClick={this.handleClick2} className="ml-2">
            click
          </button>
        </div>
      </div>
    );
  }
}
export default CreateRef;
