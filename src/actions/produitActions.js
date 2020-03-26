import axios from "axios";
import { GET_ERRORS, GET_PRODUITS, GET_PRODUIT, DELETE_PRODUIT } from "./types";

export const createProduit = (produit, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/api/produit", produit);
    history.push("/Produits");
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

export const getProduits = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/produit/all");
  dispatch({
    type: GET_PRODUITS,
    payload: res.data
  });
};

export const getProduit = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/produit/${id}`);
    dispatch({
      type: GET_PRODUIT,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProduit = (id, history) => async dispatch => {
  if (window.confirm("are you sure ?")) {
    const res = await axios.delete(`http://localhost:8080/api/produit/${id}`);
    dispatch({
      type: DELETE_PRODUIT,
      payload: id
    });
  }
};
