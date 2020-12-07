import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';


export default class PrimaryCol extends React.Component {
    constructor() {
        super();
        this.state = 
        {
            
        }
    
    }


    render() 
    {
      
             return (
            
            <div className="aboutContainer">
                
                <div className="about-Cont">
                    <img className="pokeAbout" src='/img/back/pokedeex.png' alt="profile"/>
                    <Link to="/" >
                <h3 className="text"> Inicia Sesión </h3></Link>
                    
               </div>
               
               <div className="detailsAbout">
               <img className="pokeAbout2" src='/img/back/poke.png' alt="profile"/>
                    
                    
                    


               </div> 
           </div>
            
        )
    }
}