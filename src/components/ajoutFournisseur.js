import React,{Component } from "react";
import { Button} from "react-bootstrap";
import Appbar from 'muicss/lib/react/appbar';
class AjoutFournisseur extends Component {
    render(){
    return (
  <div>
    <Appbar className="navlogin">Ajouter un Fournisseur</Appbar>
  <div > 
<form class="form">
  
  
<div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Nom</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder=""  required />
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Prenom</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder=""  required />
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">E-mail</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="" aria-describedby="inputGroupPrepend2" required />
      </div>
    </div>
  </div>
  <div class="r">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault03">Numéro de Téléphone</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="Numero de Telephone" required />
    </div>
    <div class="form-group col-md-4 mb-3">
      <label for="inputState">Civlité</label>
      <select id="inputState" class="form-control">
        <option selected>M</option>
        <option>Mme</option>
      </select>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Adresse</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Adresse" required />
    </div>
  </div> 
  </div>   
  
  <div class="bb">
  <button type="button" class="btn btn-light">Annuler</button>
  <button type="button" class="btn btn-primary">Ajouter</button>
  </div>
  
</form>
</div> 
</div> 
    );
    }}
    export default AjoutFournisseur;