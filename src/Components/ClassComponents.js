import { Component } from "react";
import Greet from "./ClassComponents/Greet";
import CounterComponent from "./ClassComponents/Counter";
import BindingEvent from "./ClassComponents/BindingEvent";
import ParentChield from "./ClassComponents/Parent_Children/ParentChield";
import Form from "./ClassComponents/Form";
import LCM from "./ClassComponents/LCM/LCM";
import Refs from "./ClassComponents/Refs/Refs";

class ClassComponents extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <h2>Welcome in Class Component Page</h2>
            <p>
              Class Componentes are ES6 classes which take props(optional) as
              input and retuen html(JSX) as out put.
            </p>
          </div>
          <div className="row border-blue-1">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Greet
                name="ANKIT CHAUDHARY"
                greetText="hye"
                isShowComponentDesc
              />
            </div>
          </div>
        </div>
        <div>
          <CounterComponent
            className="border-blue-1 mt-2"
            count={1}
            counterName="Click Counter"
          />
        </div>
        <div>
          <BindingEvent />
        </div>
        <div className="container border-blue-1 mt-2">
          <ParentChield />
        </div>
        <div>
          <Form />
        </div>
        <div className="container">
          <div className="border-green-1 mt-2">
            <LCM />
          </div>
          <div  className="border-blue-1 mt-2 p-2">
            <Refs />
          </div>
          <hr />
        </div>

        <div className="mt-4">.</div>
        <div className="mt-4">.</div>
        <div className="mt-4">.</div>
        <div className="m-4">.</div>
        <div className="m-4">.</div>
        <div className="m-4">.</div>
      </div>
    );
  }
}
export default ClassComponents;
