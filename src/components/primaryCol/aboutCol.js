import React from 'react';

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
                    <img className="pokeAbout" src='/img/back/dexd.png' alt="profile"/>
                    <img className="pokeAbout" src='/img/back/flag.png' alt="profile"/>
               </div>
               
               <div className="detailsAbout">

                    <h3 className="textAbout"> Pokédex 1.0 </h3>
                    <h2 className="textAbout2"> Andres Ortiz</h2>
                    


               </div> 
           </div>
            
        )
    }
}