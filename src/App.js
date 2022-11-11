import React from "react";
import NavBar from './Components/NavBar/NavBar.js'
import './App.css'
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";
import { Action, Originals } from './urls'
function App() {
  return (
    <div className="app">
    <NavBar/>
    <Banner/>
    <RowPost url ={Originals}title='Netflix Originals'/>
    <RowPost  url = {Action} title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
