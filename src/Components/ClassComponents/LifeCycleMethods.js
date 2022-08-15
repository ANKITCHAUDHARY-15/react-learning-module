import React, { Component } from "react";
import { LogInfo } from "../FunctionalComponents/CommonMethod";

export class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    LogInfo("-->> constructor_CALLED");
  }
  static getDerivedStateFromProps(props, state) {
    LogInfo("-->> getDerivedStateFromProps_CALLED");
    return null;
  }
  componentDidMount() {
    LogInfo("-->> componentDidMount_CALLED");
  }

  render() {
    LogInfo("-->> render_CALLED");
    return (
      <div className="container border-blue-1 mt-2">
        <h3 className="align-text-center">Component Life Cycle Method</h3>
        <div>check Console for method calling sequence</div>
      </div>
    );
  }
}

export default LifeCycleMethods;
