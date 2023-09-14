import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieDetail = ({ movie }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="container mx-auto mt-8">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mb-4"
                onClick={goBack}
            >
                Back to Home
            </button>
            <div className="bg-white shadow-md p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-600">{movie.description}</p>
                <iframe
                    title={movie.title}
                    width="560"
                    height="315"
                    src={movie.trailerLink}
                    frameBorder="0"
                    allowFullScreen
                    className="mt-4"
                ></iframe>
            </div>
        </div>
    );
};

export default MovieDetail;
