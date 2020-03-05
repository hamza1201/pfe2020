import React,{Component} from 'react';
import AjoutProduit from './components/ajoutProduit';
import AfficheProduit from './components/afficheProduit';
import Login from './components/adminlogin/Login';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {


  render(){
  return (
     <div className="App">
      
       
            
     <Main />
        
   
    </div>
        
  );
}
}
const style = {
  margin: 15,
};
export default App;

