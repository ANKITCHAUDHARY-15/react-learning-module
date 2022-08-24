import logo from "./logo.svg";
import "./App.css";
import "./Css/Common.css";
import FunctionalComponents from "./Components/FunctionalComponents";
import ClassComponents from "./Components/ClassComponents";
import Home from "./Components/HomeComponents";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomRouter from "./Router/CustomRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="m-4 border-green-1 p-2">
          <Link to="/" className="pl-4">
            Home{" "}
          </Link>
          <Link to="/functionalComponents" className="pl-4">
            {" "}
            Functional Components{" "}
          </Link>
          <Link to="/classComponents" className="pl-4">
            {" "}
            Class Components{" "}
          </Link>
        </div>

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/functionalComponents"
          component={FunctionalComponents}
        />
        <Route path="/classComponents" component={ClassComponents} />
        <CustomRouter />
      </Router>
    </div>
  );
}

export default App;
