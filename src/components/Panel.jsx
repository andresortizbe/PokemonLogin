import React from 'react';
import './panel.css';


import Sidebar from './sidebar/sidebar';
import Main from './main/main';


export default class Panel extends React.Component {
    constructor() {
      super();
      this.state = {
        showPok:false,
        showAbout:true,
        
      }
    }
  
    showPoke=()=>
    {
      
      if (this.state.showPok===false)
          {
            this.setState({showPok:true});
            this.setState({showAbout:false});
            console.log("mostrando");
            console.log("estado  "+this.state.showPok);
          }
      else if(this.state.showPok===true)
              {
                this.setState({showPok:false});
                console.log("ocultando");
                console.log("estado  "+this.state.showPok);
              }    
      
      
    }
    showAbout=()=>
    {
      
      if (this.state.showAbout===false)
          {
            this.setState({showAbout:true});
            this.setState({showPok:false});
            console.log("mostrando");
            console.log("estado  "+this.state.showAbout);
          }
      else if(this.state.showAbout===true)
              {
                this.setState({showAbout:false});
                console.log("ocultando");
                console.log("estado  "+this.state.showAbout);
              }    
      
      
    }
    
    render() {
        return (
            <div className="App">
                <Sidebar clickPoke={this.showPoke} clickAbout={this.showAbout}/>
                <Main show={this.state.showPok} showAbout={this.state.showAbout} />
            </div>
        )
    }
}

