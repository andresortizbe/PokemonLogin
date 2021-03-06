import React,{useState,useEffect} from 'react';
import './stylesDet.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PokemonDetails(props){
    let [pokemonDetails, setPokemonDetails] = useState([]);
    let [pokemonStats, setPokemonStats] = useState([]);
    let [gifExist, setGifExist] = useState(false);
    let [url,setUrl]=useState("");    
    

    useEffect( () => 
            {
                const generarUrl=() =>
                    {
                        let gifUrl='./img/pokeGif/'+props.name+'.gif';
                        let url = gifExist ? gifUrl :props.img; 
                        setUrl(url);
                        
                    };
                    generarUrl();  
                fetch(props.url)
                .then(response => response.json())
                .then(data => setPokemonDetails(data.stats ))
                .catch(error => {
                    console.log(error);
                })
                fetch(props.url)
                .then(response => response.json())
                .then(data => setPokemonStats(data.types))
                .catch(error => {
                    console.log(error);
                })
                fetch('/img/pokeGif/'+props.name+'.gif')
                .then(response => response.blob())
                .then(data => {
                    console.log(data.type)
                    if(data.type === 'image/gif') {
                        setGifExist(true);
                    }
                })
            }, );

 
        
    return (

            <div className="details-cont"><h2 className="detailTitle">{props.code+"  "+props.name.toUpperCase()}</h2>.
                <div className="img-cont">
                <img className="img4 zoom" src={url} alt={props.name} />
                <div className="typeContainer">
                        {
                          pokemonStats.map((poke, index)=>{
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
                           return( <div className="statsContainer" key={index}>
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
