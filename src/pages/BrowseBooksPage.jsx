import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton'; 
import './BrowseBooksPage.css'; 
const BrowseBooksPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const books = useSelector((state) => state.books.items);
    const { category } = useParams();
    const filteredBooks = books.filter((book) =>
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!category || book.category === category)
    );
    const groupedBooks = filteredBooks.reduce((acc, book) => {
        if (!acc[book.category]) {
            acc[book.category] = [];
        }
        acc[book.category].push(book);
        return acc;
    }, {});
    return (
        <div className="browse-books-page">
            <BackButton /> 
            <h1>Browse Books</h1>
            <input
                type="text"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="categories">
                {Object.keys(groupedBooks).length > 0 ? (
                    Object.keys(groupedBooks).map((cat) => (
                        <div key={cat} className="category-section">
                            <h2 className="category-title">{cat}</h2>
                            <div className="book-list">
                                {groupedBooks[cat].map((book) => (
                                    <div key={book.id} className="book-item">
                                        <img src={book.coverImage} alt={book.title} className="book-cover" />
                                        <h3>{book.title}</h3>
                                        <p>{book.author}</p>
                                        <Link to={`/books/${book.id}`} className="view-details">View Details</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
};
export default BrowseBooksPage;