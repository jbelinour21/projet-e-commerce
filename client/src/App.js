import { Fragment } from "react";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import Landing from "./app/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";
import ProductCard from "./app/ProductCard";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/:productid" component={ProductCard} />
        </Switch>
        <Footer/> 
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
