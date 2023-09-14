import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} className="block">
            <div className="bg-white shadow-md p-4 rounded-md">
                <img src={movie.posterURL} alt={movie.title} className="w-32 h-48 mx-auto" />
                <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
                <p className="text-gray-600">{movie.description}</p>
                <p className="text-yellow-500 mt-2">Rating: {movie.rating}</p>
            </div>
        </Link>
    );
};

export default MovieCard;
