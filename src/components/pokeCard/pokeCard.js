import React from 'react';
import './styles.css';
import Modal from "react-modal";
import PokemonDetails from '../pokemonDetail/pokemonDetail'

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      
      transform: "translate(-50%, -50%)"
    }
  };


export default class pokeCard extends React.Component {
    constructor() {
        super();
        this.state = {

            pokeStats: [],
            pokeData:[], 
            showModal:false,
            pokePa:0
        }
        this.pokeCss=this.pokeCss.bind(this);
    }
   
pokeCss(url,codigo)
{
    fetch(this.props.url)
    .then(response => response.json())
    .then(dato => this.setState({ pokeData: dato.types[0].type.name}))
    .catch(error => {
        console.log(error);
    })
    console.log(this.state.pokeData);
 
    return this.state.pokeData;
}

    
    
pokeCode(url)
{
 var regex= url.substring(59, 60);
 var code='';
 if (regex==='.')
 {
    code= url.substring(56, 59);
 }
 else
 {
     code= url.substring(56, 60);
 }



  

return code;
}

  
handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

    
    render() {
        
        
        
       
        
        return (
        <div className={`pokeCard ${this.state.pokeData && this.state.pokeData}`}>
           <div className="title-section"> <div className="pokeId"><h4 className="number">{this.pokeCode(this.props.img)}</h4></div>
            <h3 className="pokeTitle">{this.props.name.toUpperCase()}</h3></div>
            <img className="img zoom" src={this.props.img} alt={this.props.name} />
            <img className="details" src={'/img/icons/pokedex.png'} alt="detalles" onClick={this.handleOpenModal}/>
            <Modal isOpen={this.state.showModal} style={customStyles}>
            <img className="details2" src={'/img/icons/pokedex.png'} alt="about" onClick={this.handleCloseModal}/>
                    <PokemonDetails code={this.pokeCode(this.props.img)} 
                    img={this.props.img} 
                    name={this.props.name}
                    url={this.props.url}
                    />
                   
            </Modal>
            
        </div>
    )
}
}

        
