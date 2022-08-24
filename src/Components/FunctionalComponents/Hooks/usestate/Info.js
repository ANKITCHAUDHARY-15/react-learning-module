import React from "react";

export default function Info() {
  return (
    <div>
      <div>
        <div>
          <h5>Basic Info</h5>
          <div>
            <ul>
              <li>In class, state is always an object. </li>
              <li>
                with the useState hook, the state does not have to be an object .
                it will be a boolean string, object, array etc.
              </li>
              <li>
                useState hook return 2 elements, first is current value of state
                and second is setter function.
              </li>
              <li>You can pass a function in setter function.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
