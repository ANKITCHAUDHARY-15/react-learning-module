import React from "react";

const PureAndRegularComponent = () => {
  return (
    <React.Fragment>
      <h3 className="align-text-center m-4">Regular and Pure component</h3>
      <div className="text-left ml-2 row">
        <div className="col-md-6 col-sm-6">
          <div>
            <h5>Regular Component</h5>
            <div>
              <ul>
                <li>
                  A regular component does not implement the
                  shouldComponentUpdate method.
                </li>
                <li>
                  It always return <strong>true</strong> by default
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div>
            <h5>Pure Component</h5>
            <div>
              <ul>
                <li>
                  A Pure Component implements the shouldComponentUpdate
                  lifecycle method by performing a <strong>shallow comparison</strong> on the
                  props and state of the component.
                </li>
                <li>
                  If there is no difference, the component is not re-rendered
                  thereby providing a performance boost.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="author">~ ANKIT CHAUDHARY</div>
    </React.Fragment>
  );
};
export default PureAndRegularComponent;
