import React from 'react';

const Details = () => {
  return (
    <div className='container bg-white p-5'>
      <div className='row'>
        <div className='col-6'>
          <img className='img-fluid' src='/src/assets/placeholder.png' alt='placeholder img' />
        </div>
        <div className='col-6 p-3 text-center d-flex align-items-center flex-column justify-content-center'>
          <h1 className='mb-4'>Luke Skywalker</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae molestias voluptas eius, adipisci
            similique dolore amet illo esse quis suscipit officia eum incidunt molestiae itaque aspernatur quos
            voluptatem quidem maxime. Ducimus ex itaque corrupti iure quae deleniti, atque quidem laboriosam,
            consequuntur nobis adipisci velit distinctio numquam at quas doloribus!
          </p>
        </div>
      </div>
      <div className='divider'></div>
      <div className='row'>
        <div className='col-2'>1</div>
        <div className='col-2'>2</div>
        <div className='col-2'>3</div>
        <div className='col-2'>4</div>
        <div className='col-2'>5</div>
        <div className='col-2'>6</div>
      </div>
    </div>
  );
};

export default Details;
