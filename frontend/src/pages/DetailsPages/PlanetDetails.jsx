import useGlobalReducer from '../../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const PlanetDetails = () => {
  const { store } = useGlobalReducer();
  const { id } = useParams();

  const planetObj = {
    name: store.planets[id - 1].name,
    climate: store.planets[id - 1].climate,
    diameter: store.planets[id - 1].diameter,
    terrain: store.planets[id - 1].terrain,
    gravity: store.planets[id - 1].gravity,
    orbitalPeriod: store.planets[id - 1]['orbital_period'],
    population: store.planets[id - 1].population,
  };

  return (
    <div className='container bg-white p-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <img className='img-fluid' src='/src/assets/placeholder.png' alt='placeholder img' />
        </div>
        <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center'>
          <h1 className='mb-4'>{planetObj.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae molestias voluptas eius, adipisci
            similique dolore amet illo esse quis suscipit officia eum incidunt molestiae itaque aspernatur quos
            voluptatem quidem maxime. Ducimus ex itaque corrupti iure quae deleniti, atque quidem laboriosam,
            consequuntur nobis adipisci velit distinctio numquam at quas doloribus!
          </p>
        </div>
      </div>
      <div className='divider'></div>
      <div className='row d-flex justify-content-center align-items-center info-row text-danger text-center'>
        <div className='col-lg-2 p-3'>
          <h3>Population:</h3>
          <span>{planetObj.population}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Climate:</h3>
          <span>{planetObj.climate}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Terrain:</h3>
          <span>{planetObj.terrain}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Gravity:</h3>
          <span>{planetObj.gravity}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Orbital Period:</h3>
          <span>{planetObj.orbitalPeriod}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Diameter:</h3>
          <span>{planetObj.diameter}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
