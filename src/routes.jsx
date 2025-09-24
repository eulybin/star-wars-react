import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import CharacterDetails from './pages/DetailsPages/CharacterDetails';
import PlanetDetails from './pages/DetailsPages/PlanetDetails';
import VehicleDetails from './pages/DetailsPages/VehicleDetails';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/details/character/:id' element={<CharacterDetails />} />
      <Route path='/details/planet/:id' element={<PlanetDetails />} />
      <Route path='/details/vehicle/:id' element={<VehicleDetails />} />
    </Route>
  )
);
