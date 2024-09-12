import React from 'react';
import Song from './Song';
import SongData from '../Data/SongData';
import '../App.css'; // Ensure this path is correct

const SongList = ({ audioRefs }) => {
  return (
    <div className='SongListDiv'>
      {SongData.map((song, index) => (
        <div className='Song' key={song.id}>
          <Song song={song} audioRef={audioRefs.current[index]} />
        </div>
      ))}
    </div>
  );
};

export default SongList;
