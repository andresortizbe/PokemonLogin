import React, {useState} from "react";
import './App.css';
import firebase, {auth} from "./firebase/config";
import SignIn from "./components/SignIn";
import {Route, Switch, useHistory} from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Panel from "./components/Panel";





import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';


export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showPok:false,
        showAbout:true,
        
      }
    }
  
    showPoke=()=>
    {
      
      if (this.state.showPok===false)
          {
            this.setState({showPok:true});
            this.setState({showAbout:false});
            console.log("mostrando");
            console.log("estado  "+this.state.showPok);
          }
      else if(this.state.showPok===true)
              {
                this.setState({showPok:false});
                console.log("ocultando");
                console.log("estado  "+this.state.showPok);
              }    
      
      
    }
    showAbout=()=>
    {
      
      if (this.state.showAbout===false)
          {
            this.setState({showAbout:true});
            this.setState({showPok:false});
            console.log("mostrando");
            console.log("estado  "+this.state.showAbout);
          }
      else if(this.state.showAbout===true)
              {
                this.setState({showAbout:false});
                console.log("ocultando");
                console.log("estado  "+this.state.showAbout);
              }    
      
      
    }
    
    render() {
        return (
            <div className="App">
              
                <Sidebar clickPoke={this.showPoke} clickAbout={this.showAbout}/>
                
                <Main show={this.state.showPok} about={this.state.showAbout} />
            </div>
        )
    }
}
