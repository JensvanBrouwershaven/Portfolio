import React from 'react';
import '../App.css'; // Ensure this path is correct

const Footer = ({ onShuffle }) => {
  return (
    <div className="FooterBackgroundDiv">
      <button onClick={onShuffle}>Shuffle</button>
    </div>
  );
};

export default Footer;
