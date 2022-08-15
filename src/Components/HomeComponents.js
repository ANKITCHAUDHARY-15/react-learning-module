import React from "react";
import { Props } from "./FunctionalComponents/Home/Props";
import { State, SetState } from "./FunctionalComponents/Home/State";
import { KeyInList } from "./FunctionalComponents/Home/KeyInList";
import LifeCycleMethodOfClassComponent from "./FunctionalComponents/Home/LifeCycleMethodOfClassComponent";
import MountingLifeCycleMethod from "./FunctionalComponents/Home/MountingLifeCycleMethod";
import { Readme } from "./FunctionalComponents/Home/readme";
import JSX from "./FunctionalComponents/Home/JSX";
import {
  JSXSyntax,
  JSSyntax,
} from "./FunctionalComponents/Home/JSXAndNormalJS";
import {CSS} from "./FunctionalComponents/Home/CSS";

const Home = () => {
  return (
    <div>
      <div className="align-text-center">
        <h2>Welcome in Home page</h2>
        <div>This is react learning project</div>
      </div>
      <hr />
      <div className="float-left ml-2">
        <Readme />
        <hr />
        <JSX />
        <hr />
        <JSXSyntax />
        <hr />
        <JSSyntax />
        <hr />
        <Props />
        <hr />
        <State />
        <hr />
        <SetState />
        <hr />
        <KeyInList />
        <hr />
        <CSS />
        <hr />
        <LifeCycleMethodOfClassComponent />
        <hr />
        <MountingLifeCycleMethod />
        <hr />
      </div>

      <div className="m-4"></div>
    </div>
  );
};
export default Home;
