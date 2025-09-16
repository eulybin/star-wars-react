import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { useEffect } from 'react';
import { getAllCharacters } from '../services/charactersService.js';
import { getAllPlanets } from '../services/planetsService.js';
import { getAllVehicles } from '../services/vehiclesService.js';
import Card from '../components/Card.jsx';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const init = async () => {
      const characters = await getAllCharacters();
      dispatch({ type: 'GET_CHARACTERS', payload: characters });
      const planets = await getAllPlanets();
      dispatch({ type: 'GET_PLANETS', payload: planets });
      const vehicles = await getAllVehicles();
      dispatch({ type: 'GET_VEHICLES', payload: vehicles });
    };
    init();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <Navbar />
      </div>
      <div className='row mb-3'>
        <h2 className='text-danger fs-1'>Characters</h2>
      </div>
      <div className='row'>
        {store.characters &&
          store.characters.map((character, index) => {
            return (
              <div key={index} className='col-3 mb-5'>
                <Card
                  name={character.name}
                  gender={character.gender}
                  hairColor={character['hair_color']}
                  eyeColor={character['eye_color']}
                />
              </div>
            );
          })}
      </div>
      <div className='row mb-3'>
        <h2 className='text-danger fs-1'>Planets</h2>
      </div>
      <div className='row'>
        {store.planets &&
          store.planets.map((planet, index) => {
            return (
              <div key={index} className='col-3 mb-5'>
                <Card
                  name={planet.name}
                  population={planet.population}
                  diameter={planet.diameter}
                  terrain={planet.terrain}
                />
              </div>
            );
          })}
      </div>
      <div className='row mb-3'>
        <h2 className='text-danger fs-1'>Vehicles</h2>
      </div>
      <div className='row'>
        {store.vehicles &&
          store.vehicles.map((vehicle, index) => {
            return (
              <div key={index} className='col-3 mb-5'>
                <Card
                  name={vehicle.name}
                  model={vehicle.model}
                  crew={vehicle.crew}
                  manufacturer={vehicle.manufacturer}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
