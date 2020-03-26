import {
  GET_FOURNISSEURS,
  GET_FOURNISSEUR,
  DELETE_FOURNISSEUR
} from "../actions/types";

const initialState = {
  fournisseurs: [],
  fournisseur: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOURNISSEURS:
      return {
        ...state,
        fournisseurs: action.payload
      };

    case GET_FOURNISSEUR:
      return {
        ...state,
        fournisseur: action.payload
      };

    case DELETE_FOURNISSEUR:
      return {
        ...state,
        fournisseurs: state.fournisseurs.filter(
          fournisseur => fournisseur.id !== action.payload
        )
      };
    default:
      return state;
  }
}
