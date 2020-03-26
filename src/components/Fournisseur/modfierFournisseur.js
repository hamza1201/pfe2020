import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  createFournisseur,
  getFournisseur
} from "../../actions/fournisseurActions";

class ModifierFournisseur extends Component {
  constructor() {
    super();

    this.state = {
      nom: "",
      prenom: "",
      email: "",
      tel: "",
      civilite: "",
      adresse: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      nom,
      prenom,
      email,
      tel,
      civilite,
      adresse
    } = nextProps.fournisseur;

    this.setState({
      id,
      nom,
      prenom,
      email,
      tel,
      civilite,
      adresse
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFournisseur(id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateFournisseur = {
      id: this.state.id,
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      tel: this.state.tel,
      civilite: this.state.civilite,
      adresse: this.state.adresse
    };
    this.props.createFournisseur(updateFournisseur, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Modifier un fournisseur
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.nom
                      })}
                      placeholder="Nom"
                      name="nom"
                      value={this.state.nom}
                      onChange={this.onChange}
                    />
                    {errors.nom && (
                      <div className="invalid-feedback">{errors.nom}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.prenom
                      })}
                      placeholder="Prenom"
                      name="prenom"
                      value={this.state.prenom}
                      onChange={this.onChange}
                    />
                    {errors.prenom && (
                      <div className="invalid-feedback">{errors.prenom}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg")}
                      placeholder="E_mail"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.tel
                      })}
                      placeholder="Telephon"
                      name="tel"
                      value={this.state.tel}
                      onChange={this.onChange}
                    />
                    {errors.tel && (
                      <div className="invalid-feedback">{errors.tel}</div>
                    )}
                  </div>

                  <h4>Civilite</h4>
                  <div className="form-group">
                    <select
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.civilite
                      })}
                      name="civilite"
                      value={this.state.civilite}
                      onChange={this.onChange}
                    >
                      <option></option>
                      <option>M</option>
                      <option>Mme</option>
                    </select>
                    {errors.civilite && (
                      <div className="invalid-feedback">{errors.civilie}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg")}
                      placeholder="Adresse"
                      name="adresse"
                      value={this.state.adresse}
                      onChange={this.onChange}
                    />
                  </div>

                  <div>
                    <button type="reset" class="btn btn-light">
                      Annuler
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ModifierFournisseur.propTypes = {
  getFournisseur: PropTypes.func.isRequired,
  createFournisseur: PropTypes.func.isRequired,
  fournisseur: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  fournisseur: state.fournisseur.fournisseur,
  errors: state.errors
});
export default connect(mapStateProps, { getFournisseur, createFournisseur })(
  ModifierFournisseur
);
