import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <div className='container'>
      <div className='header'>
        <div className='header__logo'>
          <img src='/src/assets/images/starwars.jpg' height={100}></img>
        </div>

        <div className='header__navbar'>
          <nav>
            <Link className='link' to="/films">Films</Link>
            <Link className='link' to="/people">People</Link> 
            <Link className='link' to="/planets">Planets</Link> 
            <Link className='link' to="/species">Species</Link> 
            <Link className='link' to="/starships">Starships</Link> 
            <Link className='link' to="/vehicles">Vehicles</Link> 
          </nav>
        </div>
      </div>

      <div className='main'>

      </div>
    </div>
  );
}

export default App;
