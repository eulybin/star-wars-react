import React from 'react';

const Card = ({ name, gender, hairColor, eyeColor }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='/src/assets/placeholder.png' className='card-img-top' alt='placeholder image' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>Gender: {gender}</p>
        <p className='card-text'>Hair Color: {hairColor}</p>
        <p className='card-text'>Eye Color: {eyeColor}</p>
        <div className='d-flex justify-content-between'>
          <a href='#' className='btn btn-primary'>
            Learn more!
          </a>
          <div className='pt-2'>
            <i className='fa-slab fa-regular fa-heart text-danger fs-3'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
