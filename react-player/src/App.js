import React,{useState,useRef} from 'react';
import './styles/app.scss';
import Player from './components/player';
import Song from './components/song';
import data from "./data";
import Library from "./components/library";
import Nav from "./components/new";

function App() {
  var audioRef= useRef(null);
   const [Songs,setSongs]=useState(data());
   const [currentSong,setCurrentSong]= useState(Songs[0]);
   const [isPlaying,setIsPlaying]=useState(false);
   const [songInfo,setSongInfo]=useState({
    currentTime:0,
    duration: 0,
  });
  const [libraryStatus,setLibraryStatus]= useState(false);
  const timeUpdateHandler=(e)=>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration})
  };

 
  return (
    <div className="App">
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
    <Song currentSong={currentSong}/>      
    <Player  audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} setSongInfo={setSongInfo} songInfo={songInfo} Songs={Songs} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
    <Library audioRef={audioRef} Songs={Songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus}/>  
    <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
  
    </div>
  );
}

export default App;
