import React from 'react';
import '../App.css'
import vinylPlayer from '../assets/Images/Screenshot 2024-06-07 114022.png'

const Nav = () => {
    return (
    <div className='NavBackgroundDiv'>
        <div className='vinyl-center'>
       <img src={vinylPlayer} alt='Vinyl Player' className='NavImage' />
       </div>
       <div className='Navp2'>
        <div className='text-center'>
        <h1>Lettore Musicale</h1>
        
        <div className='NavLine'></div>
        </div>
        </div>

    </div>

    );
  };
export default Nav;
