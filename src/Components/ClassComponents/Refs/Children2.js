import React from "react";

const Children2 = React.forwardRef((props, ref) => {
  return (
    <div className="border-blue-1 m-1 p-2">
      <div >Children component</div>
      <input ref={ref} />
    </div>
  );
});
export default Children2;
