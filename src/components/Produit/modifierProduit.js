import React, { Component } from "react";
import { getProduit, createProduit } from "../../actions/produitActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class ModifierProduit extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
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
    const { id, ref, nom, prix, quant, category, description } = nextProps.produit;

    this.setState({
      id,
      ref,
      nom,
      prix,
      quant,
      category,
      description
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProduit(id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateProduit = {
      id: this.state.id,
      ref: this.state.ref,
      nom: this.state.nom,
      prix: this.state.prix,
      quant: this.state.quant,
      category: this.state.category,
      description: this.state.description
    };
    this.props.createProduit(updateProduit, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div class="project">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h5 class="display-4 text-center">Modifier Produit form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Reference de Produit"
                    name="ref"
                    value={this.state.ref}
                    onChange={this.onChange}
                    disabled
                  />
                </div>
                <div class="form-group">
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
                <div class="form-group">
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
                <div class="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.quant
                    })}
                    placeholder="Quantity de Produit"
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

                <div class="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Produit Description"
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
                    Modifier
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
ModifierProduit.propTypes = {
  getProduit: PropTypes.func.isRequired,
  createProduit: PropTypes.func.isRequired,
  produit: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  produit: state.produit.produit,
  errors: state.errors
});
export default connect(mapStateProps, { getProduit, createProduit })(
  ModifierProduit
);
