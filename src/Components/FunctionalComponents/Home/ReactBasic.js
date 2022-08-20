import React from "react";
import Portals from "./Portals";

export default function ReactBasic() {
  return (
    <div className="container">
      <div className="border-orange-1 m-2 row">
        <div className="border-teal-1 m-2 p-2 row">
            <Portals/>
        </div>
      </div>
    </div>
  );
}
