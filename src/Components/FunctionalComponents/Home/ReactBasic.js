import React from "react";
import Context from "./Context";
import Hooks from "./Hooks";
import Portals from "./Portals";
import RenderProps from "./RenderProps";

export default function ReactBasic() {
  return (
    <div className="container">
      <div className="border-orange-1 m-2 row">
        <div className="col-sm-12">
          <div className="border-teal-1 m-2 p-2 row">
            <Portals />
          </div>
          <div className="border-teal-1 m-2 p-2 row">
            <RenderProps />
          </div>
          <div className="border-teal-1 m-2 p-2 row">
            <Context />
          </div>
          <div className="border-teal-1 m-2 p-2 row">
            <Hooks />
          </div>
        </div>
      </div>
    </div>
  );
}
