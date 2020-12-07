import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import PaginationI from "./PaginationI"
import './pokeStyle.css';
import PokemonDetail from './pokemonDetail'

export default function AllPoke(props) {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonPerPage, setPokemonPerPage]=useState(10);
  const [pokePage, setPokePage]=useState(1);
  const [pokePagination, setPokePagination]=useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [pokeData, setPokeData]=useState([]);
  const [details, setDetails]=useState([]);
  const [urlExist, setUrlExist]=useState(false);
  const [urlAltPok, setUrlAltPok]=useState("");          
  
  let location = useLocation(); //Nos regresa un objeto con la ruta en la que nos encontramos actualmente

  useEffect(() => {
    console.log(location);
    const getPokemons = async () => {
      let results = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"
      );
      let data = results.data.results;
      setPokemones(data);
    };

    getPokemons();
    
  }, []);
  
 function changePage (currentPage)  
  {
     
    setPokePage(currentPage);  
    paginationChange(currentPage);
     
  }
  function urlVerify(name)
  {
    fetch('/img/pokeGif/'+name+'.gif')
    .then(response => response.blob())
    .then(data => {
        console.log(data.type)
        if(data.type === 'image/gif') {
          setUrlExist(true);
        }
        // const image = URL.createObjectURL(data)
        // console.log(image)
    })

    
  }
  function paginationChange(currentPage) {
      
      let pages = [];
      
      let sup=currentPage+4;
      let inf=currentPage-5;
      
      if (currentPage>5)
          {
            for (let i = inf; i <= sup; i++) {
                 
                  pages.push(i);
              }  

          }
      else if(currentPage<=5)
              {
                pages= [];
                pages=[1,2,3,4,5,6,7,8,9,10]; 
              }
      
       
      setPokePagination(pages)
              

  }



  function fetchPage (requestPage) 
   {
      //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
      const limit = pokemonPerPage;
      const url = 'https://pokeapi.co/api/v2/pokemon';
      fetch(`${url}?limit=24&offset=${(requestPage - 1) * 24}`)
          .then(response => response.json())
          .then(data => setPokemones( data.results ))
          .catch(error => {
              console.log(error);
          })
          
      changePage(requestPage);
      
  }
  
  
  
  return (
    
    <div className="izquierda">
     
      <img className="title" src="img/back/pokBack.png" alt="title" />
      <div  class="pokemonContainerG">
        {pokemones.map((pokemon, index) => {
          
          let url='./img/pokeGif/'+pokemon.name+'.gif';
            
          return (
           <div className="pokeGrid"> 
          
              <Link
                to={{
                  pathname: `/pokemones/${pokemon.name}`,
                  state: { isLogged: true }, 
                }}
              >
                <div className="zoom">
                <img className="title" src= {url} alt="title" onClick={()=>props.pokemonData(pokemon.name)} />

                </div>
              </Link>
           </div>
          );
        })}
      </div>
      <div className="paginationI"><PaginationI fetchPageFn={fetchPage} pokePagination={pokePagination} /></div>
    </div>
  );
}

