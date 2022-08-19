import React from "react";

function LifeCycleMethodOfClassComponent() {
  return (
    <div className="text-left ml-2" id="class-component-life-cycle-method">
      <h3>Life Cycle Method of Class Component</h3>
      <div className="m-4">
        <h4>Mounting</h4>
        <div>
          when an instance of the component is being created and inserted into
          DOM
        </div>
        <ul>
          <li>constructor</li>
          <li>static getDerivedStateFromProps</li>
          <li>render</li>
          <li>ComponentDidMount</li>
        </ul>
      </div>
      <div className="m-4">
        <h4>Updating</h4>
        <div>
          when a component is being re-rendered as a result of changes to either
          it's props or state
        </div>
        <ul>
          <li>static getDerivedStateFromProps</li>
          <li>shouldComponentUpdate</li>
          <li>render</li>
          <li>getSnapshotBeforeUpdate</li>
          <li>componentDidUpdate</li>
        </ul>
      </div>
      <div className="m-4">
        <h4>Unmounting</h4>
        <div>When a Component is being removed from the DOM</div>
        <ul>
          <li>componentwillUnmount</li>
        </ul>
      </div>
      <div className="m-4">
        <h4>Error handling</h4>
        <div>
          When there is an error during rendering, in a life cycle method or in
          the constructor of any child component
        </div>
        <ul>
        <li>static getDerivedStateFromError</li>
          <li>componentDidCatch</li>
        </ul>
      </div>
      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </div>
  );
}

export default LifeCycleMethodOfClassComponent;
