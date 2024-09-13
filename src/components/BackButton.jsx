// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './BackButton.css'; // Import the CSS file for styling

const BackButton = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <button onClick={handleClick} className="back-button">
            &larr; Back
        </button>
    );
};

export default BackButton;
