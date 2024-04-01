import './Films.scss'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Film = () => {

    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/films/');
            var results = response.data.results;
            setFilms(results);

        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <div className="films">
            {films.map((film, i) => (
                <div key={i} className='film-item'>
                    <h2>{film.title}</h2>
                    <p>Director: {film.director}</p>
                    <p>Release Date: {film.release_date}</p>
                </div>
            ))};
        </div>
    );
};

export default Film;