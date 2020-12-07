import firebase from "firebase";
//npm install firebase

const firebaseConfig = {
    apiKey: "AIzaSyDeWbT8GArZQFIT9z-eUQYBg8kuyfU-NGE",
    authDomain: "pokedexao.firebaseapp.com",
    databaseURL: "https://pokedexao.firebaseio.com",
    projectId: "pokedexao",
    storageBucket: "pokedexao.appspot.com",
    messagingSenderId: "594369639637",
    appId: "1:594369639637:web:b259af86c658e435101e5c"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
