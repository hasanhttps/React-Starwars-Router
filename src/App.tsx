import './App.scss';

function App() {

  return (
    <div className='container'>
      <div className='header'>
        <div className='header__logo'>
          <img src='/src/assets/images/starwars.jpg' height={100}></img>
        </div>

        <div className='header__navbar'>
          <nav>
            <a>Home</a>
            <a>Films</a>
            <a>People</a>
            <a>Planets</a>
            <a>Species</a>
            <a>Starships</a>
            <a>Vehicles</a>
          </nav>
        </div>
      </div>

      <div className='main'>

      </div>
    </div>
  );
}

export default App;
