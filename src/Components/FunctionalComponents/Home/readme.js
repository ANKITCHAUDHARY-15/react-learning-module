import React from "react";

export const Readme = () => {
  return (
    <>
      <div className="ml-4">
        <h3>How to create react app</h3>
        <div className="ml-6">
          <h4>Using npx</h4>
          <div>&gt;&gt; npx create-react-app &lt; projrct-name &gt;</div>
          <div>npx is a npm package manager</div>
        </div>
        <div className="ml-6">
          <h4>Using npm</h4>
          <div>&gt;&gt; npm install create-react-app -g</div>
          <span>install create-react-app globaly after that </span>
          <div>
            &gt;&gt; create-react-app &lt;project-name&gt;
          </div>
        </div>
        <h3>How to run react app</h3>
        <div className="ml-6">
          <div>&gt;&gt; npm start</div>
        </div>
      </div>

      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </>
  );
};
