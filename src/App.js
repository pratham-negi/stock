import React, {useState}from 'react';
import './App.css';
import Login from './components/login';
import Main from './components/main';

function App() {

  
  const [vis, setVis] = useState("none");

  const [user, setUser] = useState();

  function handler(){
    setVis('block');
  }


  return (<div>
    <Login usersetter = {setUser}  setdis={handler}/>
    <Main user = {user} dis={vis}/>
  
  </div>)
}

export default App;
