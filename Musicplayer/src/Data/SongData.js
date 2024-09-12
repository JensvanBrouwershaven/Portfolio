import nevereverAudio from '../assets/Music/Destroy Lonely - NEVEREVER (Official Audio).mp3';
import duckworthAudio from '../assets/Music/DUCKWORTH..mp3';
import kidsSeeGhostsAudio from '../assets/Music/Kids See Ghosts.mp3';
import meatGrinderAudio from '../assets/Music/MeatGrinder.mp3';
import oneBeerAudio from '../assets/Music/MF DOOM - One Beer (Official Video).mp3'
import newMagicWandAudio from '../assets/Music/Tyler, The Creator - NEW MAGIC WAND (feat. Santigold & Jessy Wilson).mp3'

import nsUltraCover from '../assets/AlbumCover/NS-Ultra.png';
import damnCover from '../assets/AlbumCover/DAMN.jpg';
import kidsSeeGhostsCover from '../assets/AlbumCover/Kids-See-Ghosts.jpg';
import madvillanyCover from '../assets/AlbumCover/Madvillainy.jpg';
import mmFoodCover from '../assets/AlbumCover/Mm-Food.jpg';
import igorCover from '../assets/AlbumCover/IGOR.jpg';


const SongData = [
  {
    id: 1,
    title: 'NEVEREVER',
    artist: 'Destroy Lonely',
    audioFile: nevereverAudio,
    albumCover: nsUltraCover
  },
  {
    id: 2,
    title: 'DUCKWORTH.',
    artist: 'Kendrick Lamar',
    audioFile: duckworthAudio,
    albumCover: damnCover
  },
  {
    id: 3,
    title: 'Kids See Ghosts',
    artist: 'Kids See Ghosts, Kanye West, Kid Cudi',
    audioFile: kidsSeeGhostsAudio,
    albumCover: kidsSeeGhostsCover
  },
  {
    id: 4,
    title: 'Meat Grinder',
    artist: 'MF DOOM',
    audioFile: meatGrinderAudio,
    albumCover: madvillanyCover
  },
  {
    id: 5,
    title: 'One Beer',
    artist: 'MF DOOM',
    audioFile: oneBeerAudio,
    albumCover: mmFoodCover
  },
  {
    id: 6,
    title: 'New Magic Wand',
    artist: 'Tyler the Creator',
    audioFile: newMagicWandAudio,
    albumCover: igorCover
  },
];

export default SongData;
