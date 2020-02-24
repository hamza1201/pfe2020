import React,{Component } from "react";
import { Button} from "react-bootstrap";
class Ajout extends Component {
    render(){
    return (
     
<form class="formulaire">
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Reference de Produit</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="" />
      
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Nom de Produit</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="" />
    </div>
  </div>
  <div class="prix">
  <label for="inputEmail4">Prix de Produit</label>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>
</div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-row">
    <div class="form-category col-md-5">
      <label for="inputState">Category</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>

    <div class="image col-md-5">
    <label for="exampleFormControlFile1">Image de Produit</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
    </div>
    
  </div>

    <Button class="form-button" variant="primary" type="submit">
    Ajouter
  </Button>
</form>
    );
    }}
    export default Ajout;