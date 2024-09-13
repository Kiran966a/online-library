import React from 'react';
import './HomePage.css';
import { getPopularBooks } from '../data/BookData';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const popularBooks = getPopularBooks();
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to the Online Library</h1>
                <p>Your one-stop destination for discovering great books.</p>
            </header>
            <section className="category-section">
                <h2>Book Categories</h2>
                <div className="category-links">
                    <div className="category-item">
                        <Link to="/books/Fiction" className="category-link">
                            <img src="/images/fiction.jpg" alt="Fiction" />
                            <span>Fiction</span>
                        </Link>
                    </div>
                    <div className="category-item">
                        <Link to="/books/Non-Fiction" className="category-link">
                            <img src="/images/nonfiction.jpg" alt="Non-Fiction" />
                            <span>Non-Fiction</span>
                        </Link>
                    </div>
                    <div className="category-item">
                        <Link to="/books/Sci-Fi" className="category-link">
                            <img src="/images/scifi.jpg" alt="Sci-Fi" />
                            <span>Sci-Fi</span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="popular-books">
                <h2>Popular Books</h2>
                <div className="book-list">
                    {popularBooks.map(book => (
                        <div key={book.id} className="book-item">
                            <img src={book.coverImage} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <Link to={`/books/${book.id}`} className="view-details">View Details</Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default HomePage;
