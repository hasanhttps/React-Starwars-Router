import './Films.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';

const Film = () => {

    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/films/');
            var results = response.data.results;
            setFilms(results);
            console.log(results)

        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <div className='container' id='films-container'>

            <Header/>

            <div className="films" id='list'>
                {films.length == 0 ? <p>Loading ...</p> : <></>}
                {films.map((film, i) => (
                    <div key={i} className='film-item'>
                        <p>{film.title}</p>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Film;