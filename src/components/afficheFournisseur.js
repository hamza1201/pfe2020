import React,{Component } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Appbar from 'muicss/lib/react/appbar';
import { MdCreate,MdDelete ,MdAdd,MdAddCircleOutline} from "react-icons/md";
import {FiSearch } from "react-icons/fi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class AfficheFournisseur extends Component {
 
    render(){
    return (
        <div>
             <Appbar className="navlogin">List Des Fournisseur</Appbar>
        <div class="container">

    <div class="inpad">        
  <form class="form-inline">
    
  <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><FiSearch size="1.4em"/> </span>
      </div>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <div class="posbutton">
        <a class="btn btn-success btn-sm" href="ajoutFournisseur" role="button">Ajouter
        </a>
    </div> 
   </form> 
</div>
        
        
        
        <div class="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th>Civlité</th>
                        <th>Adresse</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                
                                
                                        <tr>
                                            <td>1</td>
                                            <td>hamza</td>
                                            <td>meftah</td>
                                            <td>hamza@hamza.com</td>
                                            <td>989797</td>
                                            <td>M</td>
                                            <td>fdfdsfsfsdf</td>
                                            <td><button class="borderbutton"><MdDelete size='20px'/></button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>salim</td>
                                            <td>bensalah</td>
                                            <td>salim@salim.com</td>
                                            <td>879797</td>
                                            <td>M</td>
                                            <td>dfgfgdddd</td>
                                            <td><button class="borderbutton"><MdDelete size='20px'/></button></td>
                                        </tr>
                                
                            
                </tbody>
            </table>
            
        </div>
    </div>
    </div>
    );
}}
export default AfficheFournisseur;
