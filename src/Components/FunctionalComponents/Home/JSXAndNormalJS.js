import React from "react";

export const JSXSyntax = () => {
  return (
    <div id="jsx" className="ml-2">
      <h4>JSX Syntax in react</h4>
    </div>
  );
};
export const JSSyntax = () => {
  return React.createElement(
    "div",
    { id: "js", className: "ml-2" },
    React.createElement("h4", null, "JS Syntax in react")
  );
};
