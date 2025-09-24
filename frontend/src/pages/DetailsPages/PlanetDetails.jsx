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
      <div className='row'>
        <div className='col-2'>{planetObj.climate}</div>
        <div className='col-2'>{planetObj.diameter}</div>
        <div className='col-2'>{planetObj.terrain}</div>
        <div className='col-2'>{planetObj.gravity}</div>
        <div className='col-2'>{planetObj.orbitalPeriod}</div>
        <div className='col-2'>{planetObj.population}</div>
      </div>
    </div>
  );
};

export default PlanetDetails;
