import React from "react";

function BindingEvent() {
  function ClickHandler() {
    document.getElementById("desc").innerHTML =
      "Normal Click handler fun called";
  }
  var ClickHandlerV2 = () => {
    document.getElementById("desc").innerHTML =
      "Click handler  Arrow fun called";
  };
  return (
    <div className="col-sm-12">
      <div className="row m-2 justify-content-between">
        <h2>Event Binding: </h2>
        <button onClick={ClickHandler}> Normal Fun</button>
        <button onClick={ClickHandlerV2}> Arrow fun</button>
      </div>
      <div className="row justify-content-center">
        <div id="desc"></div>
      </div>
    </div>
  );
}

export default BindingEvent;
