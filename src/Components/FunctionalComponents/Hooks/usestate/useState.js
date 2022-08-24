import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import Student from "./Student";

export default function useState() {
  return (
    <div className="container">
      <div className="row">
        <div className="m-2 p-2 col-sm-12">
          <h3 className="align-text-center">useState Hook</h3>
          <div className="bg-teal color-white m-2 p-2">
            <Info />
          </div>
          <div className="border-blue-1 m-2 p-2">
            <Counter />
          </div>
          <div className="border-blue-1 m-2 p-2">
            <Student />
          </div>
        </div>
      </div>
    </div>
  );
}
