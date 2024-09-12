import React from 'react';
import '../App.css'; // Import the CSS file

const Header = () => {
    return (
            <div className="header1"> {/* className instead of class */}
                <ul className="headerlist"> {/* className instead of class */}
                <li><p>Home</p></li>
                <li><p>Contact</p></li>
                <li><p>About Us</p></li>
            </ul>
        </div>
    );
}

export default Header;