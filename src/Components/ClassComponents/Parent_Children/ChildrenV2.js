import React, { Component } from "react";
/**
 * Passing parameters to parent components
 */
export default class ChildrenV2 extends Component {
  render() {
    return (
      <div>
        <div>Child Component: </div>
        <div className="row m-2">
          <button
            onClick={() => {
              this.props.changeDesc(
                "ChieldV2",
                "parames desc passed by arrow method"
              );
            }}
          >
            Call Parnet Method
          </button>
        </div>
      </div>
    );
  }
}
