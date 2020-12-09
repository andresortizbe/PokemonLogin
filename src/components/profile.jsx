import React, { useState } from "react";
 import "./profile.css";
 import ContextMenu from "./contextMenu"

 export default function Profile(props) {
    let [showContextM,setShowContextM]=useState(false);
    
function setCard()
 {
  
  props.setLoginCard(false);
  //props.history.push('/pokeDex');
 }
 function showCont()
 {
     console.log("hizo click");
    if (showContextM=== false)
        {
            setShowContextM(true);
        }
    else 
        {
            setShowContextM(false);
        }
 }

  return (

    <div className="profileCard">
        { 
        showContextM ? (<ContextMenu setCard={setCard}/> ) : null
        }
        <img
            className="logo"
            src="/img/icons/logochu.png"
            alt="profile"
            onClick={showCont}
            
          />
      <h6>{props.name}</h6>
      <img
            className="picture"
            src="/img/icons/profile.png"
            alt="profile"
            
          />
    </div>
  );
}
