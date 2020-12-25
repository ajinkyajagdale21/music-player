import React from 'react';
import './styles/app.scss';
import Player from './components/player';
import Song from './components/song';
import data from "./util";

function App() {
  return (
    <div className="App">

    <Song />      
    <Player />
    
  
    </div>
  );
}

export default App;
