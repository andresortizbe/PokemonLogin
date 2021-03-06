import React, { useState, useEffect } from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PokemonDetail (props) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokeUrl,setPokeUrl]=useState("");


    useEffect(() => {  
    fetchPokemon();        
    const generarUrl=() =>
    {
        let gifUrl='../img/pokeGif/'+props.pokemonName+'.gif';
        setPokeUrl(gifUrl);
    };
    generarUrl();    
                 
    });

    async function fetchPokemon () {
             
    
        let url="https://pokeapi.co/api/v2/pokemon/"+props.pokemonName;
        let response = await fetch(url);
        let data = await response.json();
        setPokemonDetails(data.stats);
        
        let response2 = await fetch(url);
        data=await response2.json();
        setPokemonStats(data.types);
        
           } 
   
    return (
        
        
            <div className="detailsCont"><h2 className="detailTitle">{"  "+props.pokemonName.toUpperCase()}</h2>.
                <div className="img-cont">
                <img className="img4 zoom" src={pokeUrl} alt={props.pokemonName} />
                <div className="typeContainer">
                        {
                          pokemonStats.map((poke,index)=>{
                           return( <div className="divider" key={index}><div 
                            className={`typePoke ${poke.type.name} && 'poke.type.name'}`}></div>
                                      <h3 className="typeTitle">{poke.type.name.toUpperCase()}</h3>
                                      </div>)
                            })      

                            
                        }
                </div>
                    <div className="statsContainer">
                        {
                          pokemonDetails.map((poke,index)=>{
                           return( <div className="statsContainer" key={index} >
                                        <h6>{poke.stat.name.toUpperCase()}</h6>
                                        <progress  id="poke.base_stat" 
                                                  max="100" 
                                                  value={poke.base_stat}> 
                                                  "70%" </progress>
                                                  <h6 className="valueBar">{poke.base_stat}</h6>
                                    </div>    
                                 )
                            
                            })      


                        }



                    </div>

                </div>
            </div>
        )
    }
