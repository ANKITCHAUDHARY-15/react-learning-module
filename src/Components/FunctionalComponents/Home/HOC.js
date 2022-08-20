import React from "react";

export default function HOC() {
  return (
    <div>
      <div className="m-2 p-2">
        <h4>Higher Order Component (HOC)</h4>
        <div>
          <ul>
            <li>To share Comman functionality between components</li>
            <li>
              A higher-order component is a function that takes a component and
              returns a new component.
            </li>
            <li>
              Syntax:{" "}
              <strong>
                const EnhancedComponent =
                higherOrderComponent(WrappedComponent);
              </strong>
            </li>
            <li>
              Whereas a component transforms props into UI, a higher-order
              component transforms a component into another component.
            </li>
            <li></li>
            <li></li>
            <li>
              HOCs are common in third-party React libraries, such as Redux’s
              connect and Relay’s createFragmentContainer.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </div>
  );
}
