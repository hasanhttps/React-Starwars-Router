import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
        <div className='header__logo'>
          <img src='/src/assets/images/starwars.jpg' height={100}></img>
        </div>

        <div className='header__navbar'>
          <nav>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/films">Films</Link>
            <Link className='link' to="/people">People</Link> 
            <Link className='link' to="/planets">Planets</Link> 
            <Link className='link' to="/species">Species</Link> 
            <Link className='link' to="/starships">Starships</Link> 
            <Link className='link' to="/vehicles">Vehicles</Link> 
          </nav>
        </div>
      </div>
    );
};

export default Header;