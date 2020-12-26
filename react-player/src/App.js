import React,{useState} from 'react';
import './styles/app.scss';
import Player from './components/player';
import Song from './components/song';
import data from "./util";
import Library from "./components/library"

function App() {
   const [Songs,setSongs]=useState(data());
   const [currentSong,setCurrentSong]= useState(Songs[0]);
   const [isPlaying,setIsPlaying]=useState(false);
  return (
    <div className="App">

    <Song currentSong={currentSong}/>      
    <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
    <Library Songs={Songs}/>  
  
    </div>
  );
}

export default App;
