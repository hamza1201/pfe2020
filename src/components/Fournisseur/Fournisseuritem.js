import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteFournisseur,
  getFournisseurs
} from "../../actions/fournisseurActions";
import { MdDelete, MdCreate } from "react-icons/md";
import { Link } from "react-router-dom";

class Fournisseuritem extends Component {
  onDeleteClick = id => {
    this.props.deleteFournisseur(id);
  };
  componentDidMount() {
    this.props.getFournisseurs();
  }

  render() {
    const { fournisseurs } = this.props.fournisseur;
    return (
      <div class="table-responsive">
        <table className="table  table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>E_mail</th>
              <th>Tel</th>
              <th>Civlité</th>
              <th>Adresse</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fournisseurs.map(fournisseur => (
              <tr key={fournisseur.id} fournisseur={fournisseur}>
                <td>{fournisseur.id}</td>
                <td>{fournisseur.nom}</td>
                <td>{fournisseur.prenom}</td>
                <td>{fournisseur.email}</td>
                <td>{fournisseur.tel}</td>
                <td>{fournisseur.civilite}</td>
                <td>{fournisseur.adresse}</td>
                <td>
                  {
                    <Link to={`/modifierfournisseur/${fournisseur.id}`}>
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
                      onClick={this.onDeleteClick.bind(this, fournisseur.id)}
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
Fournisseuritem.propTypes = {
  fournisseur: PropTypes.object.isRequired,
  getFournisseurs: PropTypes.func.isRequired,
  deleteFournisseur: PropTypes.func.isRequired
};
const mapStateProps = state => ({
  fournisseur: state.fournisseur
});

export default connect(mapStateProps, { getFournisseurs, deleteFournisseur })(
  Fournisseuritem
);
