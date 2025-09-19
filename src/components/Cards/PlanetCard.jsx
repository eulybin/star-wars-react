import useGlobalReducer from '../../hooks/useGlobalReducer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanetCard = ({ id, name, population, diameter, terrain }) => {
  const { dispatch } = useGlobalReducer();
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddToFav = () => {
    setIsFavourite((prevFavState) => !prevFavState);
    dispatch({ type: actionTypes.addToFav, payload: { name, setIsFavourite } });
  };
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='/src/assets/placeholder.png' className='card-img-top' alt='placeholder image' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <span className='card-text d-block mb-2'>Population: {population}</span>
        <span className='card-text d-block mb-2'>Diameter: {diameter}</span>
        <span className='card-text d-block mb-2'>Terrain: {terrain}</span>
        <div className='d-flex justify-content-between mt-3'>
          <Link to={`details/planet/${id}`} className='btn border border-2 border-primary learn-more'>
            Learn more!
          </Link>
          <button
            onClick={handleAddToFav}
            className='heart-icon border border-danger border-2 rounded p-1 d-flex justify-content-center align-items-center'
          >
            <i className={`fa-${isFavourite ? 'solid' : 'regular'} fa-heart fs-3`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
