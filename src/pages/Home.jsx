import { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { getAllPeople } from '../services/peopleService.js';
import { getAllVehicles } from '../services/vehiclesService.js';
import { getAllPlanets } from '../services/planetsService.js';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const peopleData = await getAllPlanets();
      setData(peopleData);
    };
    init();
  }, []);

  console.log(data);

  return (
    <div className='text-center mt-5'>
      <h1>Home Component</h1>
    </div>
  );
};
