import React from "react";

import "./styles.css";
import Profile from "../profile"
import { Link } from "react-router-dom";

export default function Sidebar (props) {
  
  return (
    <div className="t-sidebar">
      { 
        props.loginCard ? (<Profile name={props.trainer} logOut={props.logOut} /> ) : null
      }
      
      <div className="positionA">
        
        <Link to="/PokeDex">
          <img
            className="pokeIcon"
            src="https://icon-library.com/images/pokedex-icon/pokedex-icon-19.jpg"
            alt="profile"
            onClick={props.clickPoke}
          />
        </Link>
      </div>
      
        <div className="positionA">
          <Link to="/todosPoke">
            <img
              className="pokeIcon"
              src="/img/icons/honor.png"
              alt="home"
            ></img>{" "}
          </Link>
        </div>
        <div className="positionA">
          {" "}
          <Link to="/about">
            <img
              className="pokeIcon"
              src="/img/icons/about.png"
              alt="about"
              onClick={props.clickAbout}
            ></img>
          </Link>
        </div>
      
      <img className="pokeIcon" src="/img/icons/poke3d.png" alt="poke3d"></img>
    </div>
  );
};


