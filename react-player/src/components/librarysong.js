import React from 'react';

const librarySong = ({song,Songs,setCurrentSong,id,audioRef,isPlaying,setSongs})=>{
 
  const selectSongHandler=async()=>{
  await setCurrentSong(song);
    //audioRef.current.play();
    const newSongs=Songs.map((song)=>{
      if(song.id===id){
        return{
          ...song,
          active:true,
        };
       } else {
        return{
          ...song,
          active:false,
        };  
      }
    });
    setSongs(newSongs);
    if(isPlaying) audioRef.current.play();
  };
  return(
  <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected': ""}`}>
  
     <img alt={song.name} src={song.cover}></img>
  
    <div className="song-description">  
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
   </div>
  
  </div>
  )};

  export default librarySong;