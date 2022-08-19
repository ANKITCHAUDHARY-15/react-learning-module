import React, { Component } from "react";
import { LogInfo } from "../../FunctionalComponents/CommonMethod";

export class ComponentLCM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Flag: false,
    };
    LogInfo("SCLCM_constructor_CALLED");
  }
  static getDerivedStateFromProps(props, state) {
    LogInfo("SCLCM_getDerivedStateFromProps_CALLED");
    return null;
  }
  componentDidMount() {
    LogInfo("SCLCM_componentDidMount_CALLED");
  }
  //
  shouldComponentUpdate() {
    LogInfo("SCLCM_shouldComponentUpdate_CALLED");
    return true;
  }
  getSnapshotBeforeUpdate() {
    LogInfo("SCLCM_getSnapshotBeforeUpdate_CALLED");
    return null;
  }
  componentDidUpdate() {
    LogInfo("SCLCM_componentDidUpdate_CALLED");
  }
  //
  componentWillUnmount() {
    LogInfo("SCLCM_componentwillUnmount_CALLED");
  }
  //
  getDerivedStateFromError() {
    LogInfo("SCLCM_getDerivedStateFromError_CALLED");
  }
  componentDidCatch() {
    LogInfo("SCLCM_componentDidCatch_CALLED");
  }
  //
  changeState = () => {
    this.setState({ Flag: !this.state.Flag });
  };
  render() {
    LogInfo("SCLCM_render_CALLED");
    return (
      <div className="border-blue-1 mt-2">
        <h5>Single Component Life Cycle Method</h5>
        <div>check Console for method calling sequence</div>
        <div>Flag : {this.state.Flag.toString()}</div>
        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
}

export default ComponentLCM;
