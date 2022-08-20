import React, { Component } from "react";
import Error from "../FunctionalComponents/Error";
import ErrorBoundary from "./LCM/ErrorBoundary";
import Greet from "./Greet";

export default class ErrorBounderyCheck extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Greet />
          <Error />
        </ErrorBoundary>
        <hr />
        <Greet />
        <ErrorBoundary>
          <Error />
        </ErrorBoundary>
      </div>
    );
  }
}
