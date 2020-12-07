import React from 'react';
import PokeCard from '../pokeCard/pokeCard';
import Pagination from '../pokeCard/pagination'
import './styles.css';


export default class PrimaryCol extends React.Component {
    constructor() {
        super();
        this.state = {

            pokemones: [],
            pokemonPerPage: 10,
            pokePage: 1,
            pokePagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            pokeData:[],
            details:[],
            urlExist:false,
            urlAltPok:""
            

            
        }
     this.cargarTodo=this.cargarTodo.bind(this);
     
    
     
  
    }

    componentDidMount() {
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => this.setState({ pokemones: data.results }))
            .catch(error => {
                console.log(error);
            })
           this.cargarTodo();
          
           
            }
     cargarTodo()
     {
         console.log("cargando esta monda");
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050")
            .then(response => response.json())
            .then(dato => this.setState({ pokeData: dato.results,tipos:dato.results.url}))
            .catch(error => {
                console.log(error);
            })

        this.state.pokemones.map  ((pokemon,index)=>
        {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(dato => this.setState({details: dato.types[0].type.name}))
            .catch(error => {
                console.log(error);
            })
            return true;
        })
        






    }
     
     
    
    changePage = (currentPage) => 
    {
       
        this.setState({ pokePage: currentPage });
        this.paginationChange(currentPage);
       
    }
    paginationChange(currentPage) {
        
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
        
         
        this.setState({ pokePagination:  pages});

    }



    fetchPage = (requestPage) => {
        //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * 10}`)
            .then(response => response.json())
            .then(data => this.setState({ pokemones: data.results }))
            .catch(error => {
                console.log(error);
            })
            
        this.changePage(requestPage);
        
    }
    
    
   
    render() {
      
          
        
        
        return (
            
            <div className="t-col-container">
                
                {
                      
                    this.state.pokemones.map((pokemon, index) => {
                        
                        return (<PokeCard key={index + 1} name={pokemon.name} page={this.state.pokePage} 
                            img={ genUrl(index, this.state.pokePage)} 
                            url={pokemon.url}/>)
                    })
                }
                <div className="pagination"><Pagination fetchPageFn={this.fetchPage} pokePagination={this.state.pokePagination} /></div>

            </div>
            
        )
    }
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



