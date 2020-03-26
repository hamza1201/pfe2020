import { GET_PRODUITS, GET_PRODUIT, DELETE_PRODUIT } from "../actions/types";

const initialState = {
  produits: [],
  produit: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUITS:
      return {
        ...state,
        produits: action.payload
      };

    case GET_PRODUIT:
      return {
        ...state,
        produit: action.payload
      };

    case DELETE_PRODUIT:
      return {
        ...state,
        produits: state.produits.filter(
          produit => produit.ref !== action.payload
        )
      };

    default:
      return state;
  }
}
