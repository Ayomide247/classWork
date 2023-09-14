import React from 'react';

const Filter = ({ titleFilter, ratingFilter, setTitleFilter, setRatingFilter }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <input
                type="text"
                placeholder="Filter by title"
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
                className="p-2 w-full mb-4"
            />
            <input
                type="number"
                placeholder="Filter by rating"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="p-2 w-full"
            />
        </div>
    );
};

export default Filter;
