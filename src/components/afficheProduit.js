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

class AfficheProduit extends Component {
 
    render(){
    return (
        <div>
             <Appbar className="navlogin">List Des Produit</Appbar>
        <div class="container">

    <div class="inpad">        
  <form class="form-inline">
    
  <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><FiSearch size="1.4em"/> </span>
      </div>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <div class="posbutton">
        <a class="btn btn-success btn-sm" href="ajoutProduit" role="button"><strong>A</strong><b>jouter</b>
        </a>
    </div>
  </form>
</div>
        
        
        
        <div class="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Reference</th>
                        <th>Nom de Produit</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                
                                
                                        <tr>
                                            <td>1</td>
                                            <td>R45</td>
                                            <td>iphone</td>
                                            <td>500 DT</td>
                                            <td>10</td>
                                            <td>Appel</td>
                                            <td>fdfdsfsfsdf</td>
                                            <td>photo</td>
                                            <td><button class="borderbutton"><MdCreate size='20px'/></button></td>
                                            <td><button class="borderbutton"><MdDelete size='20px'/></button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>R46</td>
                                            <td>samsung</td>
                                            <td>600 DT</td>
                                            <td>5</td>
                                            <td>android</td>
                                            <td>dfgfgdddd</td>
                                            <td>photo</td>
                                            <td><button class="borderbutton"><MdCreate size='20px'/></button></td>
                                            <td><button class="borderbutton"><MdDelete size='20px'/></button></td>
                                        </tr>
                                
                            
                </tbody>
            </table>
        </div>
    </div>
    </div>
    );
}}
export default AfficheProduit;
