import React, { Component } from "react";
import { ComponentLCM } from "./ComponentLCM";
import LCM_Parent from "./LCMParent";

export default class LCM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signleLCMFlag: false,
      PCLCMFlag:false
    };
  }
  taggleSignleLCMFlag = () => {
    this.setState({ signleLCMFlag: !this.state.signleLCMFlag });
  };
  tagglePCLCMFlag = () => {
    this.setState({ PCLCMFlag: !this.state.PCLCMFlag });
  };
  render() {
    return (
      <div>
        <div>
          <h4 className="align-text-center">Component Life Cycle Method</h4>
          <div className="border-blue-1 m-2 p-2">
            <button onClick={this.taggleSignleLCMFlag}>
              single Component all LCM check
            </button>
            {this.state.signleLCMFlag && <ComponentLCM />}
          </div>
          <div className="border-blue-1 m-2 p-2">
            <button onClick={this.tagglePCLCMFlag}>
              Parent chield Component all LCM check
            </button>
            {this.state.PCLCMFlag && <LCM_Parent/>}
          </div>
        </div>
      </div>
    );
  }
}
