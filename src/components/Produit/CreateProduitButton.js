import React from "react";
import { Link } from "react-router-dom";

const CreateProduitButton = () => {
  return (
    <React.Fragment>
      <div className="posbutton">
        <Link to="/ajoutProduit" className="btn btn-primary">
          Ajouter Produit
        </Link>
      </div>
    </React.Fragment>
  );
};
export default CreateProduitButton;
