import { React } from "react";
import Greeting from "./FunctionalComponents/Greet";
import { GreetV2 } from "./FunctionalComponents/GreetV2";
import BindingEvent from "./FunctionalComponents/BindingEvent";
import RenderList from "./FunctionalComponents/RenderList";
import StylingReactComponent from "./FunctionalComponents/StylingReactComponent";

const FunctionalComponents = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <h2>Welcome in Functional Component Page</h2>
        </div>
        <div className="row border-blue-1">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <Greeting name="Ankit" greetingText="Hi" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <GreetV2 name="Ankit" greetingText="Hellow" isShowComponentDesc>
              <p>I am Children element</p>
            </GreetV2>
          </div>
        </div>
        <div className="row border-blue-1 mt-2">
          <BindingEvent />
        </div>
        <div className="row border-blue-1 mt-2">
          <RenderList />
        </div>
        <div className="row border-blue-1 mt-2">
          <StylingReactComponent />
        </div>
        <div className="row border-blue-1 mt-2">
        </div>
        <div className="row border-blue-1 mt-2"></div>
      </div>
      <div></div>

      <div className="m-4"></div>
    </div>
  );
};
export default FunctionalComponents;
