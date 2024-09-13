import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; 
const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
};
export default NotFoundPage;
