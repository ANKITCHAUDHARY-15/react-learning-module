import React from "react";

export const Props = () => {
  return (
    <div className="text-left ml-2" id="props">
      <h3 className="ml-4">props :</h3>
      <ol>
        <li>props get passed to the component</li>
        <li>They are Function Parameters</li>
        <li>They are immutable</li>
        <li>Used in Functional Component -- props</li>
        <li>Used in class Component -- this.props</li>
      </ol>
      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </div>
  );
};
