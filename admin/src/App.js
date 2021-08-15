import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./app/Home";
import Topbar from "./app/shared/Topbar";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
function App() {
  return (
    <Fragment>
    <Router>
      
    <Topbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
       
      </Router>
    </Fragment>
  );
}

export default App;
