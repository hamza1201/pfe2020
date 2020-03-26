import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import produitReducer from "./produitReducer";
import fournisseurReducer from "./FournisseurReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  produit: produitReducer,
  fournisseur: fournisseurReducer,
  security: securityReducer
});
