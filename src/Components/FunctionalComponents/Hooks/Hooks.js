import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import useState from "./usestate/useState";

export default function Hooks() {
  return (
    <div>
      <div className="m-2 p-2">
        <h5 className="align-text-center">Hooks</h5>
        <div>
          <a href="/functionalComponents/usestate-hook">useState</a>
        </div>
      </div>
    </div>
  );
}
