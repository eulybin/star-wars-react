import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Details from './pages/Details';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/details/:entity/:id' element={<Details />} />
    </Route>
  )
);
