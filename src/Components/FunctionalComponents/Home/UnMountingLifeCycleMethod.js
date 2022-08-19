import React from "react";

function UnMountingLifeCycleMethod() {
  return (
    <div>
      <div className="text-left ml-2" id="mounting-life-cycle-method">
        <h3>UnMounting Life Cycle Method</h3>
        <div className="m-4">
          <div>
            <h3>componentWillUnmount</h3>
            <div>
              <ul>
                <li>
                  Method is invoked immediately bedore the component is
                  unmounted and destroyed
                </li>
                <li>
                  Canclling any network requests, removing event
                  handlers,cancelling any subscribtions and also invalidating
                  timers.
                </li>
                <li>Don't call setState method.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="author">~ ANKIT CHAUDHARY</div>
    </div>
  );
}

export default UnMountingLifeCycleMethod;
