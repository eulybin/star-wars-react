import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { actionTypes } from '../store.js';
import { useEffect } from 'react';
import { getAllCharacters } from '../services/charactersService.js';
import { getAllPlanets } from '../services/planetsService.js';
import { getAllVehicles } from '../services/vehiclesService.js';
import CharacterCard from '../components/Cards/CharacterCard.jsx';
import PlanetCard from '../components/Cards/PlanetCard.jsx';
import VehicleCard from '../components/Cards/VehicleCard.jsx';

const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const init = async () => {
      const characters = await getAllCharacters();
      dispatch({ type: actionTypes.getCharacters, payload: characters });
      const planets = await getAllPlanets();
      dispatch({ type: actionTypes.getPlanets, payload: planets });
      const vehicles = await getAllVehicles();
      dispatch({ type: actionTypes.getVehicles, payload: vehicles });
    };
    init();
  }, []);

  return (
    <div className='container'>
      <div className='row mb-3'>
        <h2 className='text-warning fs-1'>Characters ⭐️</h2>
      </div>
      <div className='row'>
        {store.characters &&
          store.characters.map((character, index) => {
            return (
              <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5'>
                <CharacterCard
                  id={index + 1}
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
        <h2 className='text-warning fs-1'>Planets 🪐</h2>
      </div>
      <div className='row'>
        {store.planets &&
          store.planets.map((planet, index) => {
            return (
              <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5'>
                <PlanetCard
                  id={index + 1}
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
        <h2 className='text-warning fs-1'>Vehicles 🚀</h2>
      </div>
      <div className='row'>
        {store.vehicles &&
          store.vehicles.map((vehicle, index) => {
            return (
              <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5'>
                <VehicleCard
                  id={index + 1}
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
