import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class pokemonDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonDetails: [],
            pokemonStats:[],
            gifExist:false,
            urlExist:false,
        }
    }
    componentDidMount() {
        
        let url="https://pokeapi.co/api/v2/pokemon/"+this.props.pokemonName;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ pokemonDetails: data.stats }))
            .catch(error => {
                console.log(error);
            })

    }

    render() {
        
        let gifUrl='../img/pokeGif/'+this.props.pokemonName.toLowerCase()+'.gif';
        
        console.log(gifUrl);
        
        return (
            <div className="details-cont"><h2 className="detailTitle">{"  "+this.props.pokemonName.toUpperCase()}</h2>.
                <div className="img-cont">
                <img className="img4 zoom" src={gifUrl} alt={this.props.pokemonName} />
                <div className="typeContainer">
                        {
                          this.state.pokemonStats.map((poke)=>{
                           return( <div className="divider"><div 
                            className={`typePoke ${poke.type.name} && 'poke.type.name'}`}></div>
                                      <h3 className="typeTitle">{poke.type.name.toUpperCase()}</h3>
                                      </div>)
                            })      

                            
                        }
                </div>
                    <div className="statsContainer">
                        {
                          this.state.pokemonDetails.map((poke)=>{
                           return( <div className="statsContainer">
                                        <h6>{poke.stat.name.toUpperCase()}</h6>
                                        <progress  id="poke.base_stat" 
                                                  max="100" 
                                                  value={poke.base_stat}> 
                                                  "70%" </progress>
                                                  <h7 className="valueBar">{poke.base_stat}</h7>
                                    </div>    
                                 )
                            
                            })      


                        }



                    </div>

                </div>
            </div>
        )
    }

}

