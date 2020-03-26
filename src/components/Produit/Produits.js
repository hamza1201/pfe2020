import React, { Component } from "react";
import CreateProduitButton from "./CreateProduitButton";
import AfficheProduit from "./afficheProduit";

export default class Produits extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Produits</h1>
              <br />
              <CreateProduitButton />
              <br />
              <hr />
              <AfficheProduit />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
