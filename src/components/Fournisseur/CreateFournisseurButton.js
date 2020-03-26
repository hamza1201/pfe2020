import React from "react";
import { Link } from "react-router-dom";

const CreateFournisseurButton = () => {
  return (
    <React.Fragment>
      <div className="posbutton">
        <Link to="/addFournisseur" className="btn btn-primary">
          Ajouter un Fournisseur
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CreateFournisseurButton;
