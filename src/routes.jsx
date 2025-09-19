import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import CharacterDetails from './pages/CharacterDetails';
import PlanetDetails from './pages/PlanetDetails';
import VehicleDetails from './pages/VehicleDetails';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/character_details/:id' element={<CharacterDetails />} />
      <Route path='/planet_details/:id' element={<PlanetDetails />} />
      <Route path='/vehicle_details/:id' element={<VehicleDetails />} />
    </Route>
  )
);
