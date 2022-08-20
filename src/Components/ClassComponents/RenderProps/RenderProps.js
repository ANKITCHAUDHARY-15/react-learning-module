import React, { Component } from "react";
import Children from "./Children";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import HoverCounter from "./HoverCounter";
class RenderProps extends Component {
  render() {
    return (
      <div>
        <div>
          <h3 className="align-text-center">Render Props</h3>
          <div className="border-yellow-1 m-1 p-1">
            <Children
              render={() => {
                return <div>hi I am ANKIT</div>;
              }}
            />
          </div>
          <div className="border-green-1 m-1 p-1">
            <h5>Using props method</h5>
            <div className="border-yellow-1 m-1 p-1">
              <Counter
                render={(count, incermentCount) => (
                  <ClickCounter count={count} incermentCount={incermentCount} />
                )}
              />
            </div>
            <div className="border-yellow-1 m-1 p-1">
              <Counter
                render={(count, incermentCount) => (
                  <HoverCounter count={count} incermentCount={incermentCount} />
                )}
              />
            </div>
          </div>
          <div className="border-green-1 m-1 p-1">
            <h5>Using Children props Method</h5>
            <div className="border-orange-1 m-1 p-1">
              <Counter2>
                {(count, incermentCount) => (
                  <ClickCounter count={count} incermentCount={incermentCount} />
                )}
              </Counter2>
            </div>
            <div className="border-orange-1 m-1 p-1">
              <Counter2>
                {(count, incermentCount) => (
                  <HoverCounter count={count} incermentCount={incermentCount} />
                )}
              </Counter2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderProps;
