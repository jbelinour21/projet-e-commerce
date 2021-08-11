import { Fragment, useEffect } from "react";
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
import OrderPage from "./app/OrderPage";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./actions/auth.actions";
import { USER_LOGOUT } from "./constants/types";
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: USER_LOGOUT });
    });
  }, []);

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
          <Route exact path="/order" component={OrderPage}/>
        </Switch>
        <Footer/> 
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
