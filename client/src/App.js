import { Fragment } from "react";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import Landing from "./app/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
      </Router>
    </Fragment>
  );
}

export default App;
