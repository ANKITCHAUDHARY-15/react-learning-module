import React, { Component } from "react";
import { LogInfo } from "../../FunctionalComponents/CommonMethod";
import LCMChildren from "./LCMChildren";

export class LCM_Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Flag: false,
      Count: 0,
    };
    LogInfo("PARENT_constructor_CALLED");
  }
  static getDerivedStateFromProps(props, state) {
    LogInfo("PARENT_getDerivedStateFromProps_CALLED");
    return null;
  }
  componentDidMount() {
    LogInfo("PARENT_componentDidMount_CALLED");
  }
  //
  shouldComponentUpdate() {
    LogInfo("PARENT_shouldComponentUpdate_CALLED");
    return true;
  }
  getSnapshotBeforeUpdate() {
    LogInfo("PARENT_getSnapshotBeforeUpdate_CALLED");
    return null;
  }
  componentDidUpdate() {
    LogInfo("PARENT_componentDidUpdate_CALLED");
  }
  //
  componentWillUnmount() {
    LogInfo("PARENT_componentwillUnmount_CALLED");
  }
  //
  changeState = () => {
    this.setState({ Flag: !this.state.Flag });
  };
  increaseCount = () => {
    this.setState({ Count: this.state.Count + 1 });
  };
  render() {
    LogInfo("PARENT_render_CALLED");
    return (
      <div className="border-blue-1 mt-2">
        <h3 className="align-text-center">
          Component Life Cycle Method (PARENT CHILDREN) - Parent
        </h3>
        <div>check Console for method calling sequence</div>
        <div>
          <span>Flag : {this.state.Flag.toString()}</span>
          <br />
          <span>Count: {this.state.Count}</span>
        </div>
        <button onClick={this.changeState}>change Flag state</button>
        <button onClick={this.increaseCount} className="ml-4">
          Increase Count
        </button>
        <div className="m-4">
          <LCMChildren Count={this.state.Count} />
        </div>
      </div>
    );
  }
}

export default LCM_Parent;
