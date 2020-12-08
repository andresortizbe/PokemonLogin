import React,{useEffect,useState} from 'react';
import PokeCard from '../pokeCard/pokeCard';
import Pagination from '../pokeCard/pagination'
import './styles.css';


export default function PrimaryCol () 
{
    
    let[pokemones,setPokemones]=useState([]);
    let [pokemonPerPage,setPokemonPerPage]=useState(10);
    let [pokePage,setPokePage]=useState(1);
    let[pokePagination,setPokePagination]=useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
    let[pokeData,setPokeData]=useState([]);
    let[details,setDetails]=useState([]);
    let[urlExist,setUrlExist]=useState(false);
    let [urlAltPok,setUrlAltPok]=useState("");        
        
    

    useEffect( () => 
        {
        const limit = pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => setPokemones( data.results))
            .catch(error => {
                console.log(error);
            })
           cargarTodo();
          }, []);

    function cargarTodo()
     {
         console.log("cargando esta monda");
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050")
            .then(response => response.json())
            .then(dato => setPokeData(dato.results.url))
            .catch(error => {
                console.log(error);
            })

        pokemones.map  ((pokemon,index)=>
        {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(dato => setDetails(dato.types[0].type.name))
            .catch(error => {
                console.log(error);
            })
            return true;
        })
        
        }
     
     
    
function changePage (currentPage)  
    {
       
        setPokePage(currentPage);
        paginationChange(currentPage);
       
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
        
         
        setPokePagination(pages);

    }

    function genUrl(indexPoke, pokePage) {

        let pokemonImg = "";
        let code = "";
        let aux, aux2, aux3;
        if (pokePage < 10) {
            if (indexPoke < 9) {
                aux = pokePage - 1;
                aux = aux * 10;
                aux2 = indexPoke + 1;
                aux3 = aux + aux2;
                if (pokePage === 1) {
                    code = "00" + aux3;
                }
                else {
                    code = "0" + aux3;
    
                }
    
                
                pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${code}.png`
            }
            else {
                code = ((pokePage - 1) * 10) + (indexPoke + 1);
               
                pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${code}.png`
            }
        
        }
        if (pokePage > 9) {
    
            aux = pokePage - 1;
            aux = aux * 10;
            aux2 = indexPoke + 1;
            aux3 = aux + aux2;
            if (aux3 < 100) {
                code = "0" + aux3;
            }
            else {
                code = aux3;
            }
            pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${code}.png`
        }
    
        return pokemonImg;
    }

function fetchPage(requestPage)  
{
        //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
        const limit = pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * 10}`)
            .then(response => response.json())
            .then(data => setPokemones(data.results ))
            .catch(error => {
                console.log(error);
            })
            
    changePage(requestPage);
        
    }
        
        return (
            
            <div className="t-col-container">
                
                {
                      
                    pokemones.map((pokemon, index) => {
                        
                        return (<PokeCard key={index + 1} name={pokemon.name} page={pokePage} 
                            img={ genUrl(index, pokePage)} 
                            url={pokemon.url}/>)
                    })
                }
                <div className="pagination"><Pagination fetchPageFn={fetchPage} pokePagination={pokePagination} /></div>

            </div>
            
        )
}





