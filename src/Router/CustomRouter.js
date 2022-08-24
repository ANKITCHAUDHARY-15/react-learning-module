import React from "react";
import { Route, Router } from "react-router-dom";
import useState from "../Components/FunctionalComponents/Hooks/usestate/useState";

export default function CustomRouter() {
  return (
    <>
      <Route path="/functionalComponents/usestate-hook" component={useState} />
    </>
  );
}
