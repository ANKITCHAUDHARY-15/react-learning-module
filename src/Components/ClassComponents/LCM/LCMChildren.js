import React, { Component } from "react";
import { LogInfo } from "../../FunctionalComponents/CommonMethod";

export class LCMChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Flag: false,
    };
    LogInfo("CHILDREN_constructor_CALLED");
  }
  static getDerivedStateFromProps(props, state) {
    LogInfo("CHILDREN_getDerivedStateFromProps_CALLED");
    return null;
  }
  componentDidMount() {
    LogInfo("CHILDREN_componentDidMount_CALLED");
  }
  //
  shouldComponentUpdate() {
    LogInfo("CHILDREN_shouldComponentUpdate_CALLED");
    return true;
  }
  getSnapshotBeforeUpdate() {
    LogInfo("CHILDREN_getSnapshotBeforeUpdate_CALLED");
    return null;
  }
  componentDidUpdate() {
    LogInfo("CHILDREN_componentDidUpdate_CALLED");
  }
  //
  componentWillUnmount() {
    LogInfo("CHILDREN_componentwillUnmount_CALLED");
  }
  //
  changeState = () => {
    this.setState({ Flag: !this.state.Flag });
  };
  render() {
    LogInfo("CHILDREN_render_CALLED");
    return (
      <div className="border-blue-1 p-2">
        <h6 className="align-text-center">
          Component Life Cycle Method (PARENT CHILDREN) - Children
        </h6>
        <div>check Console for method calling sequence</div>
        <div>
          <span>state Flag : {this.state.Flag.toString()}</span>
          <br />
          <span>Props Count : {this.props.Count}</span>
        </div>
        <button onClick={this.changeState}>change children state</button>
      </div>
    );
  }
}

export default LCMChildren;
