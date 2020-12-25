import React,{useState} from 'react';
import './styles/app.scss';
import Player from './components/player';
import Song from './components/song';
import data from "./util";

function App() {
   const [Songs,setSongs]=useState(data());
   const [currentSong,setCurrentSong]= useState(Songs[2]);
   const [isPlaying,setIsPlaying]=useState(false);
  return (
    <div className="App">

    <Song currentSong={currentSong}/>      
    <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
    
  
    </div>
  );
}

export default App;
