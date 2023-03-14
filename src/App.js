import React from "react";
import { Titulo } from "./Titulo";
import { Buscador } from "./Buscador";
import {Slider} from "./Slider"
//import './App.css';

function App() {
  return (
    <React.Fragment>
    <Titulo/>
      
    <Buscador/>
    
    <Slider/>
    {/**<Card/> */}
    </React.Fragment>
  );
}

export default App;


