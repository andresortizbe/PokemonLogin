import React, { useState, useEffect } from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PokemonDetail (props) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokeUrl,setPokeUrl]=useState("");


    useEffect(async () =>  
    { 
        let url="https://pokeapi.co/api/v2/pokemon/"+props.pokemonName;
        let response = await fetch(url);
        let data = await response.json();
        setPokemonDetails(data.stats);
        
        let response2 = await fetch(url);
        data=await response2.json();
        setPokemonStats(data.types);
        generarUrl(props.pokemonName.toLowerCase());                
    }, []);
   function generarUrl(name)
    {
        let gifUrl='../img/pokeGif/'+name+'.gif';
        setPokeUrl(gifUrl);
    }
    return (
        
        
            <div className="detailsCont"><h2 className="detailTitle">{"  "+props.pokemonName.toUpperCase()}</h2>.
                <div className="img-cont">
                <img className="img4 zoom" src={pokeUrl} alt={props.pokemonName} />
                <div className="typeContainer">
                        {
                          pokemonStats.map((poke)=>{
                           return( <div className="divider"><div 
                            className={`typePoke ${poke.type.name} && 'poke.type.name'}`}></div>
                                      <h3 className="typeTitle">{poke.type.name.toUpperCase()}</h3>
                                      </div>)
                            })      

                            
                        }
                </div>
                    <div className="statsContainer">
                        {
                          pokemonDetails.map((poke)=>{
                           return( <div className="statsContainer">
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
