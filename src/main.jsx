import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css'; 
const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <Router>
            <Navbar />
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/browse"
                    element={<BrowseBooksPage searchTerm={searchTerm} />}
                />
                <Route
                    path="/books/:category"
                    element={<BrowseBooksPage searchTerm={searchTerm} />}
                />
                <Route
                    path="/books/:id"
                    element={<BookDetailsPage />}
                />
                <Route
                    path="/add"
                    element={<AddBookPage />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </Router>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Main />
    </Provider>
);
