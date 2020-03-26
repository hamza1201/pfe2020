import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProduits, deleteProduit } from "../../actions/produitActions";
import PropTypes from "prop-types";
import { MdCreate, MdDelete } from "react-icons/md";

class AfficheProduit extends Component {
  onDeleteClick = id => {
    this.props.deleteProduit(id);
  };

  componentDidMount() {
    this.props.getProduits();
  }
  render() {
    const { produits } = this.props.produit;
    return (
      <div class="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Reference</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Category</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {produits.map(produit => (
              <tr key={produit.id} produit={produit}>
                <td>{produit.id}</td>
                <td>{produit.ref}</td>
                <td>{produit.nom}</td>
                <td>{produit.prix}</td>
                <td>{produit.quant}</td>
                <td>{produit.category}</td>
                <td>{produit.description}</td>
                <td>
                  {
                    <Link to={`/modifierProduit/${produit.ref}`}>
                      <button className="borderbutton">
                        <MdCreate size="20px" />
                      </button>
                    </Link>
                  }
                </td>
                <td>
                  {
                    <button
                      className="borderbutton"
                      onClick={this.onDeleteClick.bind(this, produit.ref)}
                    >
                      <MdDelete size="20px" />
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

AfficheProduit.propTypes = {
  produit: PropTypes.object.isRequired,
  getProduits: PropTypes.func.isRequired,
  deleteProduits: PropTypes.func.isRequired
};

const mapStateProps = state => ({
  produit: state.produit
});
export default connect(mapStateProps, { getProduits, deleteProduit })(
  AfficheProduit
);
