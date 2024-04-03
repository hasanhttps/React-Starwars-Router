import './Person.scss'
import { useLocation } from "react-router-dom";
import Header from '../../components/Header/Header';

const Person = () => {
    const { state } = useLocation();

    return (
        <div className='container'>

            <Header/>

            <div id="list">
                <p className="details-txt"><b>Name:</b> {state.name}</p>
                <p className="details-txt"><b>Birth Year:</b> {state.birth_year}</p>
                <p className="details-txt"><b>Eye Color:</b> {state.eye_color}</p>
                <p className="details-txt"><b>Gender:</b> {state.gender}</p>
                <p className="details-txt"><b>Hair Color:</b> {state.hair_color}</p>
                <p className="details-txt"><b>Height:</b> {state.height}</p>
                <p className="details-txt"><b>Mass:</b> {state.mass}</p>
                <p className="details-txt"><b>Skin Color:</b> {state.skin_color}</p>
            </div>
        </div>
    );
};

export default Person;