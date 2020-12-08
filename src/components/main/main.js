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
  let [isLogged, setIsLogged] = useState(false);
  let [pokemonData,setPokemonData]=useState([]);
  
    

  const signInGoogle = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      history.push('/pokeDex');
    }).catch(error => {
      setIsLogged(false);
      console.log(error);
    })
  }

  const signInFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
     
      let user = result.user;
      setUser(user);
      setIsLogged(true);
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
            <SignIn signInGoogle={signInGoogle} signInFacebook={signInFacebook} setIsLogged={setIsLogged}/>
        </Route>
        
        <Route path="/Registro" exact>
          <SignUp />
        </Route>
        <PrivateRoute path="/pokeDex" logged={isLogged} user={user}>
                      <PrimaryCol/>                    
        </PrivateRoute>
        <PrivateRoute path="/about" logged={isLogged} user={user}>
                      <AboutCol/>
                      
        </PrivateRoute>
        <PrivateRoute path="/todosPoke" logged={isLogged} user={user}>
                      <AllPoke pokemonData={setPokemonData}/>
        </PrivateRoute>
        
        <PrivateRoute path="/pokemones/:pokemonName" logged={isLogged} user={user}>
                      <PokemonDetail pokemonName={pokemonData}/>      
        </PrivateRoute> 
      </Switch>
    }
  </div>
        );
}

export default Main;
  
  
  
  
  
