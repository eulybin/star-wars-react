import useGlobalReducer from '../hooks/useGlobalReducer';

const Card = ({ name, gender, hairColor, eyeColor, terrain, diameter, population, model, crew, manufacturer }) => {
  const { dispatch } = useGlobalReducer();

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='/src/assets/placeholder.png' className='card-img-top' alt='placeholder image' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        {gender && <span className='card-text d-block mb-2'>Gender: {gender}</span>}
        {hairColor && <span className='card-text d-block mb-2'>Hair Color: {hairColor}</span>}
        {eyeColor && <span className='card-text d-block mb-2'>Eye Color: {eyeColor}</span>}
        {population && <span className='card-text d-block mb-2'>Population: {population}</span>}
        {diameter && <span className='card-text d-block mb-2'>Diameter: {diameter}</span>}
        {terrain && <span className='card-text d-block mb-2'>Terrain: {terrain}</span>}
        {model && <span className='card-text d-block mb-2'>Model: {model}</span>}
        {crew && <span className='card-text d-block mb-2'>Crew: {crew}</span>}
        {manufacturer && <span className='card-text d-block mb-2'>Manufacturer: {manufacturer}</span>}
        <div className='d-flex justify-content-between'>
          <a href='#' className='btn btn-primary'>
            Learn more!
          </a>
          <div onClick={() => dispatch({ type: 'ADD_TO_FAV', payload: name })} className='pt-2'>
            <i className='fa-solid fa-heart text-danger fs-3'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
