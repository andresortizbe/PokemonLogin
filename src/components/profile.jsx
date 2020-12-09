import React from "react";
 import "./profile.css";
 

 export default function Profile(props) {
    

  return (

    <div className="profileCard">
       
        <img
            className="logo"
            src="/img/icons/logochu.png"
            alt="profile"
            onClick={props.logOut}
        
            
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
