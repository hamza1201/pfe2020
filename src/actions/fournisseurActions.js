import axios from "axios";
import {
  GET_ERRORS,
  GET_FOURNISSEURS,
  GET_FOURNISSEUR,
  DELETE_FOURNISSEUR
} from "./types";

export const createFournisseur = (fournisseur, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/fournisseur",
      fournisseur
    );
    history.push("/Fournisseurs");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
export const getFournisseurs = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/fournisseur/all");
  dispatch({
    type: GET_FOURNISSEURS,
    payload: res.data
  });
};

export const getFournisseur = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/fournisseur/${id}`);
    dispatch({
      type: GET_FOURNISSEUR,
      payload: res.data
    });
  } catch (error) {
    history.push("/dash");
  }
};

export const deleteFournisseur = id => async dispatch => {
  if (window.confirm("are you sure ?")) {
    await axios.delete(`http://localhost:8080/api/fournisseur/${id}`);
    dispatch({
      type: DELETE_FOURNISSEUR,
      payload: id
    });
  }
};
