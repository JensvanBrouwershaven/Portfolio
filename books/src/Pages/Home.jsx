// pages/Home.js
import React from 'react';
import BookList from '../components/Book-List';
import Search from '../components/Search';
import '../App.css';
import books from '../components/Data';

const Home = () => {
  return (
    <div>
      <div className='header'>
        <p></p> 
        <div className='bestsellers'>
          <h1>Top 3 Bestseller Boeken</h1>
        </div>
      </div>
      <div className="app">
        {/* <BookList books={books} /> */}
        <Search />
      </div>
    </div>
  );
};

export default Home;
