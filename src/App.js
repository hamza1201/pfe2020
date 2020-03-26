import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import AjoutProduit from "./components/Produit/ajoutProduit";
import AfficheProduit from "./components/Produit/afficheProduit";
import ModifierProduit from "./components/Produit/modifierProduit";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Produits from "./components/Produit/Produits";
import Fournisseurs from "./components/Fournisseur/Fournisseurs";
import AddFournisseur from "./components/Fournisseur/AddFournisseur";
import ModifierFournisseur from "./components/Fournisseur/modfierFournisseur";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000 + 30 * 60;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/Produits" component={Produits} />
              <Route exact path="/ajoutProduit" component={AjoutProduit} />
              <Route
                exact
                path="/modifierProduit/:id"
                component={ModifierProduit}
              />
              <Route exact path="/Fournisseurs" component={Fournisseurs} />
              <Route exact path="/addFournisseur" component={AddFournisseur} />
              <Route
                exact
                path="/modifierFournisseur/:id"
                component={ModifierFournisseur}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
