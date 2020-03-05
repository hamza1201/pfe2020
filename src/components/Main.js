import React from 'react';
import {Switch, Route, Router,BrowserRouter} from 'react-router-dom';
import AjoutProduit from './ajoutProduit';
import AfficheProduit from './afficheProduit';
import AfficheFournisseur from './afficheFournisseur';
import Login from './adminlogin/Login';
import AjoutFournisseur from './ajoutFournisseur';
const Main= ()=>
(    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/afficheProduit" component={AfficheProduit}/>
        <Route path="/ajoutProduit" component={AjoutProduit}/> 
        <Route path="/ajoutFournisseur" component={AjoutFournisseur}/> 
        <Route path="/afficheFournisseur" component={AfficheFournisseur}/>

    </Switch>
    </BrowserRouter>
   
)
export default Main;