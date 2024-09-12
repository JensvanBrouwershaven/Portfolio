import React from 'react';
import '../App.css';

const Song = ({ song, audioRef }) => {
  return (
    <div className='maindiv'>
      <div className='flexboxSongDiv'>
        <div className='image'>
          <img src={song.albumCover} alt={`${song.title} album cover`} className='AlbumImage' />
        </div>
        <div className='SongInformationDiv'>
          <h2 className='blackColor'>{song.title}</h2>
          <h3 className='blackColor'>{song.artist}</h3>
          <audio controls className='customAudio' ref={audioRef}>
            <source src={song.audioFile} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Song;
