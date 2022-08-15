import React from "react";

export const State = () => {
  return (
    <div className="text-left ml-2" id="state">
      <h3 className="ml-4">state : </h3>
      <ol>
        <li> state is managed within the components</li>
        <li>Variable declared in the function body</li>
        <li>state can be changed</li>
        <li>Used in Functional Component -- useState Hook</li>
        <li>Used in class Component -- this.state</li>
      </ol>
      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </div>
  );
};

export const SetState = () => {
  return (
    <div className="text-left ml-2" id="setState">
      <h3 className="ml-4">setState :</h3>
      <ol>
        <li>
          Always use setState to change state and never modify the state
          directly
        </li>
        <li>
          Code that you want to executed after the state has been updated? place
          that code in the call back fun which is second argument of setState
        </li>
        <li>
          when you have to update state base on previous state value ,pass in a
          fun as an argument instead of the regular Object
        </li>
      </ol>
      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </div>
  );
};
