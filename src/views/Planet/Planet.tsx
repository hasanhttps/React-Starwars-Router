import './Planet.scss'
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

const Planet = () => {
  const { state } = useLocation();

  return (
    <div className="container">
        
        <Header/>

        <div id="list">
            <p className="details-txt"><b>Name:</b> {state.name}</p>
            <p className="details-txt"><b>Population:</b> {state.population}</p>
            <p className="details-txt"><b>Terrain:</b> {state.terrain}</p>
            <p className="details-txt"><b>Climate:</b> {state.climate}</p>
            <p className="details-txt"><b>Diameter:</b> {state.diameter}</p>
            <p className="details-txt"><b>Gravity:</b> {state.gravity}</p>
            <p className="details-txt"><b>Orbital Period:</b> {state.orbital_period}</p>
            <p className="details-txt"><b>Rotation Period:</b> {state.rotation_period}</p>
            <p className="details-txt"><b>Surface Water:</b> {state.surface_water}</p>
        </div>
    </div>
  );
};

export default Planet;