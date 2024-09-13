import React from 'react';
const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};
export default SearchBar;
