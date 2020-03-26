import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProduit } from "../../actions/produitActions";
import classnames from "classnames";

class AjoutProduit extends Component {
  constructor() {
    super();

    this.state = {
      ref: "",
      nom: "",
      prix: "",
      quant: "",
      category: "",
      description: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProduit = {
      ref: this.state.ref,
      nom: this.state.nom,
      prix: this.state.prix,
      quant: this.state.quant,
      category: this.state.category,
      description: this.state.description
    };
    this.props.createProduit(newProduit, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Ajout d'un Produit</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.ref
                    })}
                    placeholder="Reference de Produit"
                    name="ref"
                    value={this.state.ref}
                    onChange={this.onChange}
                  />
                  {errors.ref && (
                    <div className="invalid-feedback">{errors.ref}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.nom
                    })}
                    placeholder="Nom de Produit"
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
                      "is-invalid": errors.prix
                    })}
                    placeholder="Prix de Produit"
                    name="prix"
                    value={this.state.prix}
                    onChange={this.onChange}
                  />
                  {errors.prix && (
                    <div className="invalid-feedback">{errors.prix}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.quant
                    })}
                    placeholder="Quantité de Produit"
                    name="quant"
                    value={this.state.quant}
                    onChange={this.onChange}
                  />
                  {errors.quant && (
                    <div className="invalid-feedback">{errors.quant}</div>
                  )}
                </div>

                <h4>Categories</h4>
                <div className="form-group">
                  <select
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.category
                    })}
                    name="category"
                    value={this.state.category}
                    onChange={this.onChange}
                  >
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                  {errors.category && (
                    <div className="invalid-feedback">{errors.category}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
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
    );
  }
}
AjoutProduit.propTypes = {
  createProduit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  errors: state.errors
});

export default connect(mapStateProps, { createProduit })(AjoutProduit);
