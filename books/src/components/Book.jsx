import React from 'react';
import "../App"

const Book = ({ title, author, image }) => {
    return (
        <div className="bookparent">
        <div className="book">
            <img src={image} alt={title}  className="bookimg"/>
                <h2>{title}</h2>
                <p>{author}</p>
                </div>
        </div>
    );
}

export default Book;