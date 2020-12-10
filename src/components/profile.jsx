import React from "react";
 import "./profile.css";
 

 export default function Profile(props) {
    
let urlDir="";
console.log(urlDir);
if (props.imageUrl===null)
    {
        console.log("careguama");
        urlDir="/img/icons/profile.png"
        
    }
else 
{
    urlDir=props.imageUrl;
}
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
            src={urlDir}
            alt="profile"
            
          />
    </div>
  );
}
