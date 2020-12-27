import React from 'react';
import LibrarySong from './librarysong';

const Library=({Songs,setCurrentSong})=>{
    return(
    <div className="library">
        <h2>Library</h2>
        <div className="library-songs">
            {Songs.map((song)=>(
                <LibrarySong song={song} Songs={Songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id}/>
            ))}
            
        </div>
    </div>
    );
}

export default Library;