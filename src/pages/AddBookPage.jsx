import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';
import BackButton from '../components/BackButton'; 
import './AddBookPage.css'; 
const AddBookPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validateForm = () => {
        const errors = {};
        if (!title) errors.title = 'Title is required';
        if (!author) errors.author = 'Author is required';
        if (!description) errors.description = 'Description is required';
        if (!rating) errors.rating = 'Rating is required';
        else if (isNaN(rating) || rating < 0 || rating > 10) errors.rating = 'Rating must be a number between 0 and 10';
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            dispatch(addBook({ title, author, description, rating }));
            navigate('/browse');
        }
    };
    return (
        <div className="add-book-page">
            <BackButton /> 
            <h1>Add New Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="error-message">{errors.title}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {errors.author && <p className="error-message">{errors.author}</p>}
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.description && <p className="error-message">{errors.description}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    {errors.rating && <p className="error-message">{errors.rating}</p>}
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};
export default AddBookPage;
