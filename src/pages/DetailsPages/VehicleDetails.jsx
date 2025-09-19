import useGlobalReducer from '../../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
  const { store } = useGlobalReducer();
  const { id } = useParams();

  const vehicleObj = {
    name: store.vehicles[id - 1].name,
    crew: store.vehicles[id - 1].crew,
    model: store.vehicles[id - 1].model,
    vehicleClass: store.vehicles[id - 1]['vehicle_class'],
    manufacturer: store.vehicles[id - 1].manufacturer,
    cargoCapacity: store.vehicles[id - 1]['cargo_capacity'],
    length: store.vehicles[id - 1].length,
  };

  return (
    <div className='container bg-white p-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <img className='img-fluid' src='/src/assets/placeholder.png' alt='placeholder img' />
        </div>
        <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center'>
          <h1 className='mb-4'>{vehicleObj.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae molestias voluptas eius, adipisci
            similique dolore amet illo esse quis suscipit officia eum incidunt molestiae itaque aspernatur quos
            voluptatem quidem maxime. Ducimus ex itaque corrupti iure quae deleniti, atque quidem laboriosam,
            consequuntur nobis adipisci velit distinctio numquam at quas doloribus!
          </p>
        </div>
      </div>
      <div className='divider'></div>
      <div className='row d-flex justify-content-center align-items-center info-row text-danger text-center'>
        <div className='col-lg-2 p-3'>
          <h3>Crew:</h3>
          <span>{vehicleObj.crew}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Model:</h3>
          <span>{vehicleObj.model}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Company:</h3>
          <span className='text-center'>{vehicleObj.manufacturer}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Vehicle Class:</h3>
          <span>{vehicleObj.vehicleClass}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Capacity:</h3>
          <span>{vehicleObj.cargoCapacity}</span>
        </div>
        <div className='col-lg-2 p-3'>
          <h3>Length:</h3>
          <span>{vehicleObj.length}m</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
