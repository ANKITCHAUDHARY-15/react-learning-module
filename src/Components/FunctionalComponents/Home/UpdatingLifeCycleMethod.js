import React from "react";

function UpdatingLifeCycleMethod() {
  return (
    <div>
      <div className="text-left ml-2" id="updating-life-cycle-method">
        <h3>Updating Life Cycle Method</h3>
        <div className="m-4">
          <h3>static getDerivedStateFromProps(props,state)</h3>
          <div>
            <ul>
              <li>
                Method is called every time whenever the component is
                re-rendered
              </li>
              <li>
                when the state of the component depends on changes in props over
                time
              </li>
              <li> set state </li>
              <li>Do not cause side effects EX: HTTP Requests </li>
              <li></li>
            </ul>
          </div>
          <div>
            <h3>shouldComponentUpdate(nextProps,nextState)</h3>
            <div>
              <ul>
                <li>Dictates if the componend should re rendered or not.</li>
                <li>
                  it's retunr true or false. based on that component re rendered
                  or not
                </li>
                <li>it's basicaly used in performance optimization.</li>
                <li>Do not cause side effects EX: HTTP Requests </li>
                <li>avoid to Calling the setState method.</li>
              </ul>
            </div>
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
          <div>
            <h3>getSnapshotBeforeUpdate(prevProps,prevState)</h3>
            <div>
              <ul>
                <li>
                  Called right before the changes from the virtual DOM are to be
                  reflected in the DOM
                </li>
                <li>capture some information from the DOM</li>
                <li>Method will either return null or value</li>
                <li>
                  Returned value will be passed as the third parameter to the
                  next method.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>componentDidUpdate(prevProps,prevState,snapshot)</h3>
            <div>
              <ul>
                <li>
                  Called after the render is fnished in the re rendered cycle.
                </li>
                <li>snapshot : returned value of getSnapshotBeforeUpdate</li>
                <li>called only once in each re rendered cycle.</li>
                <li>cause side effects eg you can make ajex calles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="author">~ ANKIT CHAUDHARY</div>
    </div>
  );
}

export default UpdatingLifeCycleMethod;
