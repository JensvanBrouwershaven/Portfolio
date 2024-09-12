import React, { useRef, useState } from 'react';
import SongList from './components/SongList';
import './App.css'; // Ensure this path is correct
import Nav from './components/NavBar';
import Footer from './components/Footer';
import SongData from './Data/SongData';

const App = () => {
  const audioRefs = useRef(SongData.map(() => React.createRef()));
  const [prevSongIndex, setPrevSongIndex] = useState(null);

  const handleShuffle = () => {
    // Pause all audio elements
    audioRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.pause();
      }
    });

    let randomIndex = Math.floor(Math.random() * SongData.length);

    // Ensure the newly selected song index is different from the previous one
    while (randomIndex === prevSongIndex) {
      randomIndex = Math.floor(Math.random() * SongData.length);
    }

    const randomAudioRef = audioRefs.current[randomIndex];

    // Play the randomly selected song
    if (randomAudioRef.current) {
      randomAudioRef.current.play();
    }

    // Update the previous song index
    setPrevSongIndex(randomIndex);
  };

  return (
    <div>
      <nav>
        <div>
          <Nav />
        </div>
      </nav>
      <div className='songlistInApp'>
        <SongList audioRefs={audioRefs} />
      </div>
      <div className='footeraaaaaaa'>
        <Footer onShuffle={handleShuffle} />
      </div>
    </div>
  );
};

export default App;
