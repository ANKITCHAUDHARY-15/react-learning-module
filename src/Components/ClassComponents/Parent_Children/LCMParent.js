import React, { Component } from "react";
import { LogInfo } from "../../FunctionalComponents/CommonMethod";
import LCMChildren from "./LCMChildren";

export class LCM_Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    LogInfo("PARENT_constructor_CALLED");
  }
  static getDerivedStateFromProps(props, state) {
    LogInfo("PARENT_getDerivedStateFromProps_CALLED");
    return null;
  }
  componentDidMount() {
    LogInfo("PARENT_componentDidMount_CALLED");
  }

  render() {
    LogInfo("PARENT_render_CALLED");
    return (
      <div className="container border-blue-1 mt-2">
        <h3 className="align-text-center">
          Component Life Cycle Method (PARENT CHILDREN)
        </h3>
        <div>check Console for method calling sequence</div>
        <div className="m-4">
          <LCMChildren/>
        </div>
      </div>
    );
  }
}

export default LCM_Parent;
