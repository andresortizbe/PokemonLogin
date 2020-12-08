import React, {useState} from "react";
import './App.css';
import firebase, {auth} from "./firebase/config";
import SignIn from "./components/SignIn";
import {Route, Switch, useHistory} from "react-router-dom";

import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Panel from "./components/Panel";
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';


export default function App () 
{
    
    let [showPok, setShowPok]=useState(false);
    let [showAbout, setShowAbout]=useState(true);
       
        
      
  function showPoke()
      {
      
      if (showPok===false)
          {
            setShowPok(true);
            setShowAbout(false);
          }
      else if(showPok===true)
              {
                
                setShowPok(false);
                setShowAbout(true);
              }    
      
      
    }
    function showAbo()
    {
      
      if (showAbout===false)
          {
            setShowAbout(true);
            setShowPok(false);
                      }
      else if(showAbout===true)
              {
                setShowAbout(false);
                setShowPok(true);
              }    
      
      
    }
    
    return (
            <div className="App">
              
                <Sidebar clickPoke={showPoke} clickAbout={showAbo}/>
                
                <Main show={showPok} about={showAbout} />
            </div>
        )
}
