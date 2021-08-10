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
import Panier from "./app/Panier";



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
          <Route exact path="/products/:productid" component={ProductCard} />
          <Route exact path="/panier" component={Panier}/>
        </Switch>
        <Footer/> 
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
