import React from 'react';
import Book from './Book'; // Corrected import

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <Book
                    key={index}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                />
            ))}
        </div>
    );
}

export default BookList;