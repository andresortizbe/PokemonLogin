import React, {useState} from "react";
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';


export default function App () 
{
    
    let [showPok, setShowPok]=useState(false);
    let [showAbout, setShowAbout]=useState(true);
    let [trainer,setTrainer]=useState("");   
    let [loginCard,setLoginCard]=useState(false);
    
        
      
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
                 <Sidebar clickPoke={showPoke} clickAbout={showAbo} trainer={trainer} loginCard={loginCard} />
                 <Main show={showPok} about={showAbout} setTrainer={setTrainer} setLoginCard={setLoginCard} />
            </div>
        )
}
