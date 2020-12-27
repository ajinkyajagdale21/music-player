import React from 'react';

const librarySong = ({song,Songs,setCurrentSong,id})=>{
 
  const selectSongHandler=()=>{
    setCurrentSong(song);
  }
  
  return(
  <div onClick={selectSongHandler} className="library-song">
  
     <img alt={song.name} src={song.cover}></img>
  
    <div className="song-description">  
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
   </div>
  
  </div>
  )};

  export default librarySong;