import React from 'react';
import LibrarySong from './librarysong';

const Library=({Songs,setCurrentSong,audioRef,isPlaying,setSongs,libraryStatus})=>{
    return(
    <div className={`library ${libraryStatus ? 'active-library':""}`}>
        <h2>Library</h2>
        <div className="library-songs">
            {Songs.map((song)=>(
                <LibrarySong song={song} Songs={Songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
            ))}
            
        </div>
    </div>
    );
}

export default Library;