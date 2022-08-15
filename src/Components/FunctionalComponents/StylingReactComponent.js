import { getQueriesForElement } from "@testing-library/react";
import React from "react";
import "./../../Css/Color.css";
import style from "./../../Css/Color.css"; // it's cont work
import style2 from "./../../Css/Color.module.css";

// styling react component
//1. css stylesheet
//2. inline styleing
//3. css modules
//4. css in js libaries
const inlineCss = {
  color: "green",
  "margin-top": "10px",
};

function StylingReactComponent() {
  const className = "color-red";

  return (
    <div className="ml-2">
      <h3 className="align-text-center">Styling a React Component</h3>
      <div className={`${className} m-t-5`}>
        color red margin top 10px using css style sheet
      </div>
      <div style={inlineCss}>
        color green margin top 10px using inline styling 1
      </div>
      <div className={style.warning}>
        color warning using css file as module syntax not working
      </div>
      {/* in css moule approach : we cann't use style2 in child component */}
      <div className={style2.warning}>color warning using css module</div>
    </div>
  );
}

export default StylingReactComponent;
