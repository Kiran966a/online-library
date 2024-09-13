import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data/BookData';
const BookDetailsPage = () => {
    const { id } = useParams(); 
    console.log('ID:', id); 
    const book = books.find(book => book.id === parseInt(id, 10));
    console.log('Book:', book); 
    if (!book) return <p>Book not found</p>;
    return (
        <div className="book-details">
            <img src={book.coverImage} alt={book.title} className="book-cover" />
            <h1>{book.title}</h1>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
        </div>
    );
};
export default BookDetailsPage;
