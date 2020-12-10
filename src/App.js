import React, {useState} from "react";
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import firebase  from "./firebase/config";
import {useHistory} from "react-router-dom";

export default function App () 
{
    let history = useHistory();
    let [showPok, setShowPok]=useState(false);
    let [showAbout, setShowAbout]=useState(true);
    let [trainer,setTrainer]=useState("");   
    let [loginCard,setLoginCard]=useState(false);
    let [image,setImage]=useState("");
    let [isLogged, setIsLogged] = useState(false);    
  function logOut()
  {
    alert("Log Out");
    firebase.auth().signOut().then(function() 
    {
     setIsLogged(false);
     setLoginCard(false);
     history.push('/');
    }).catch(function(error) {
      // An error happened.
    });


  } 
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
                 <Sidebar 
                 clickPoke={showPoke} 
                 clickAbout={showAbo} 
                 trainer={trainer} 
                 loginCard={loginCard} 
                 logOut={logOut}
                 imageUrl={image}/>
                 <Main show={showPok} 
                 about={showAbout} 
                 setTrainer={setTrainer} 
                 setLoginCard={setLoginCard} 
                 isLogged={isLogged}
                 setIsLogged={setIsLogged}
                 setImage={setImage}
                 />
            </div>
        )
}
