import './People.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'

const People = () => {

    const [people, setPeople] = useState([]);

    const fetchFilms = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/people/');
            var results = response.data.results;
            setPeople(results);

        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <div className='container' id='people-container'>

            <Header/>

            <div className="people" id='list'>
                {people.length == 0 ? <p>Loading ...</p> : <></>}
                {people.map((person, i) => (
                    <div className='person-item' key={i}>
                        <p className='name'>{person.name}</p>
                        <div className="wrapper">
                            <div className="link_wrapper">
                                <Link className='see-details' to={`/films/${i + 1}`}>See Details</Link>
                                <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;