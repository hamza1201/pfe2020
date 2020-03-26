import React, { Component } from "react";
import CreateFournisseurButton from "./CreateFournisseurButton";
import Fournisseuritem from "./Fournisseuritem";

export default class Fournisseurs extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Fournisseurs</h1>
              <br />
              <CreateFournisseurButton />
              <br />
              <hr />
              <Fournisseuritem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
