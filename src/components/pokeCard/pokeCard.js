import React,{useState} from 'react';
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


export default function  PokeCard (props) 
{
    let [showModal, setShowModal] = useState(false); 
    
function pokeCode(url)
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

  
function handleOpenModal  ()  {
    setShowModal(true);
  };

function handleCloseModal ()  {
    setShowModal(false);
  };

    
        return (
        <div className={`pokeCard `}>
           <div className="title-section"> <div className="pokeId"><h4 className="number">{pokeCode(props.img)}</h4></div>
            
            <h3 className="pokeTitle">{props.name.toUpperCase()}</h3></div>
            <img className="img zoom" src={props.img} alt={props.name} />
            <img className="details" src={'/img/icons/pokedex.png'} alt="detalles" onClick={handleOpenModal}/>
            <Modal isOpen={showModal} style={customStyles}>
            <img className="details2" src={'/img/icons/pokedex.png'} alt="about" onClick={handleCloseModal}/>
                    <PokemonDetails 
                    key={pokeCode(props.img)} 
                    code={pokeCode(props.img)} 
                    img={props.img} 
                    name={props.name}
                    url={props.url}
                    />
                   
            </Modal>
            
        </div>
    )
}
        
