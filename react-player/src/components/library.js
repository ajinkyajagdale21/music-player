import React from 'react';
import LibrarySong from './librarysong';

const Library=({Songs})=>{
    return(
    <div className="library">
        <h2>Library</h2>
        <div className="library-songs">
            {Songs.map((song)=>(
                <LibrarySong song={song}/>
            ))}
            
        </div>
    </div>
    );
}

export default Library;