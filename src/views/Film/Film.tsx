import './Film.scss'
import { useLocation } from "react-router-dom"
import Header from '../../components/Header/Header';

const Film = () => {

    const { state } = useLocation();

    return (
        <div className='container'>

            <Header/>

            <div id="list">
                <p className="details-txt"><b>Title:</b> {state.title}</p>
                <p className="details-txt"><b>Director:</b> {state.director}</p>
                <p className="details-txt"><b>Release Date:</b> {state.release_date}</p>
                <p className="details-txt"><b>Producers:</b> {state.producers}</p>
                <p className="details-txt"><b>Episode Id:</b> {state.episode_id}</p>
            </div>
        </div>
    );
};

export default Film;