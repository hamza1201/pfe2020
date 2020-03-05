import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'muicss/lib/react/appbar';
import TextField from 'material-ui/TextField';
import React,{Component } from "react";



class Login extends Component {
render() {
    return (
      <div>
        <MuiThemeProvider>
         <Appbar className="navlogin">Login</Appbar>
           <div className="all">
           <div className="containerlogin">
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
               </div>
             <br/>
             <div className="buttonsub">
             <button type="button" class="btn btn-light">Annuler</button>
             <button type="button" class="btn btn-info">Connexion</button>
             
             </div>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
export default Login;