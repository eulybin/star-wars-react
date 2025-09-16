import { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { getAllPeople } from '../services/peopleService.js';
import { getAllPlanets } from '../services/planetsService.js';
import { getAllVehicles } from '../services/vehiclesService.js';
import Card from '../components/Card.jsx';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const peopleData = await getAllPeople();
      setData(peopleData);
    };
    init();
  }, []);

  console.log(data);

  return (
    <div className='container'>
      <div className='row'>
        <Navbar />
      </div>
      <div className='row mb-3'>
        <h2 className='text-danger fs-1'>Characters</h2>
      </div>
      <div className='row'>
        {data &&
          data.map((character, index) => {
            return (
              <div className='col-3 mb-5'>
                <Card
                  key={index}
                  name={character.name}
                  gender={character.gender}
                  hairColor={character['hair_color']}
                  eyeColor={character['eye_color']}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
