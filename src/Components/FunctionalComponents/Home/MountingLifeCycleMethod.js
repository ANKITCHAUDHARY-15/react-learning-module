import React from "react";

function MountingLifeCycleMethod() {
  return (
    <div>
      <div className="text-left ml-2" id="mounting-life-cycle-method">
        <h3>Mounting Life Cycle Method</h3>
        <div className="m-4">
          <h4>constructor(props)</h4>
          <div>
            <ul>
              <li>
                A special fun that will get called whenever a new component
                created
              </li>
              <li>call :- super(props)</li>
              <li>initialized state</li>
              <li>binding event handler</li>
              <li>Directly overWrite this.state.</li>
              <li>Do not cause side effects EX: HTTP Requests </li>
            </ul>
          </div>

          <h3>static getDerivedStateFromProps(props,state)</h3>
          <div>
            <ul>
              <li>when the state of the component depends on changes in props over time</li>
              <li> set state </li>
              <li>Do not cause side effects EX: HTTP Requests </li>
              <li></li>
            </ul>
          </div>
          <h3>render()</h3>
          <div>
            <ul>
              <li>only required method</li>
              <li>Read props and state and return JSX </li>
              <li>Don't change state or interact with DOM or ajax calls</li>
              <li>Children Components Life Cycle methods are also executed</li>
              <li></li>
            </ul>
          </div>
          <h3>ComponentDidMount()</h3>
          <div>
            <ul>
              <li>it will be Calles only once in the hole life cycle of the given Component</li>
              <li>invoked immediately after a component and all it's Children componend have been rendered to the DOM</li>
              <li>Cause side effect Ex: interact with the DOM or perform any ajax calls to load data</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="author">~ ANKIT CHAUDHARY</div>
    </div>
  );
}

export default MountingLifeCycleMethod;
