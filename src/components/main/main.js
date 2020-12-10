import React, {useState} from "react";
import "./styles.css";
import {Route, Switch, useHistory} from "react-router-dom";
import firebase, {auth} from "../../firebase/config";
import PrimaryCol from "../primaryCol/primary-col"
import AboutCol from "../primaryCol/aboutCol"
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PrivateRoute from "../PrivateRoute";
import AllPoke from "../allPoke/allPoke";
import PokemonDetail from "../allPoke/pokemonDetail"






function Main (props) {
  
  let history = useHistory();
  let provider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [user, setUser] = useState({});
  
  let [pokemonData,setPokemonData]=useState([]);
  
    
  function sendTrainer(trainer)
  {
    props.setTrainer(trainer);
    props.setLoginCard(true);
    
  }
  function sendImage(image)
  {
    props.setImage(image);
  }
  const signInGoogle = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user;
      setUser(user);
      props.setIsLogged(true);
      sendTrainer(result.user.displayName);
      sendImage(result.user.photoURL);
      history.push('/pokeDex');
    }).catch(error => {
      props.setIsLogged(false);
      console.log(error);
    })
  }

  const signInFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
     
      let user = result.user;
      setUser(user);
      props.setIsLogged(true);
      sendTrainer(result.user.displayName);
      sendImage(result.user.photoURL);
      history.push('/pokeDex');
      console.log(user);
    }).catch(error => {
      console.log(error);
    })
  }
  
  
  return (

    <div className="t-main">
    {
      <Switch>
        <Route path="/" exact>
            <SignIn signInGoogle={signInGoogle} 
                    signInFacebook={signInFacebook} 
                    setIsLogged={props.setIsLogged} 
                    setTrainer={sendTrainer}
                    history={history} 
                    sendImage={sendImage} />
        </Route>
        
        <Route path="/Registro" exact>
          <SignUp />
        </Route>
        <PrivateRoute path="/pokeDex" logged={props.isLogged} user={user}>
                      <PrimaryCol/>                    
        </PrivateRoute>
        <PrivateRoute path="/about" logged={props.isLogged} user={user}>
                      <AboutCol/>
                      
        </PrivateRoute>
        <PrivateRoute path="/todosPoke" logged={props.isLogged} user={user}>
                      <AllPoke pokemonData={setPokemonData}/>
        </PrivateRoute>
        
        <PrivateRoute path="/pokemones/:pokemonName" logged={props.isLogged} user={user}>
                      <PokemonDetail pokemonName={pokemonData}/>      
        </PrivateRoute> 
      </Switch>
    }
  </div>
        );
}

export default Main;
  
  
  
  
  
