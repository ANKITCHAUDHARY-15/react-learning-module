import React, { Component } from 'react'
import { LogInfo } from "../../FunctionalComponents/CommonMethod";

export class LCMChildren extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
        LogInfo("CHILDREN_constructor_CALLED");
      }
      static getDerivedStateFromProps(props, state) {
        LogInfo("CHILDREN_getDerivedStateFromProps_CALLED");
        return null;
      }
      componentDidMount() {
        LogInfo("CHILDREN_componentDidMount_CALLED");
      }
    
      render() {
        LogInfo("CHILDREN_render_CALLED");
        return (
          <div className="container border-blue-1 mt-2">
            <h3 className="align-text-center">Component Life Cycle Method (PARENT CHILDREN)</h3>
            <div>check Console for method calling sequence</div>
          </div>
        );
      }
}

export default LCMChildren
