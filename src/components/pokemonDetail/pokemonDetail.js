import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class pokemonDetails extends React.Component {
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
        
        
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ pokemonDetails: data.stats }))
            .catch(error => {
                console.log(error);
            })
            fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ pokemonStats: data.types }))
            .catch(error => {
                console.log(error);
            })
            fetch('/img/pokeGif/'+this.props.name+'.gif')
            .then(response => response.blob())
            .then(data => {
                console.log(data.type)
                if(data.type === 'image/gif') {
                    this.setState({gifExist:true})
                }
                // const image = URL.createObjectURL(data)
                // console.log(image)
            })

            fetch(this.props.url)
            .then(response => response.blob())
            .then(data => {
                console.log(data.type)
                if(data.type === 'image/gif') {
                    this.setState({urlExist:true})
                }
                // const image = URL.createObjectURL(data)
                // console.log(image)
            })
            .catch(error => {
                
                this.setState({urlExist:false})
            })
        

    }

    render() {
        
        let gifUrl='./img/pokeGif/'+this.props.name+'.gif';
            
        let url = this.state.gifExist ? gifUrl : this.props.img; 
        
        console.log(url);
        console.log(this.props.img);
        return (
            <div className="details-cont"><h2 className="detailTitle">{this.props.code+"  "+this.props.name.toUpperCase()}</h2>.
                <div className="img-cont">
                <img className="img4 zoom" src={url} alt={this.props.name} />
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

