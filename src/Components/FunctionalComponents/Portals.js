import React from "react";
import  ReactDOM  from "react-dom";

export default function Portals() {
  return ReactDOM.createPortal(
    <div className="m-2 p-2">
      I am a Portal Component that rendered inside portal-root id component
    </div>,
    document.getElementById("portal-root")
  );
}
