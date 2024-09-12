// components/Search.jsx
import React, { useState } from 'react';
import books from './Data.jsx';
import '../App.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleChange}
        className="search-bar"
      />
      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
