import useGlobalReducer from '../../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { store } = useGlobalReducer();
  const { id } = useParams();

  const characterObj = {
    name: store.characters[id - 1].name,
    birthYear: store.characters[id - 1]['birth_year'],
    gender: store.characters[id - 1].gender,
    height: store.characters[id - 1].height,
    mass: store.characters[id - 1].mass,
    eyeColor: store.characters[id - 1]['eye_color'],
    skinColor: store.characters[id - 1]['skin_color'],
  };

  return (
    <div className='container bg-white p-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <img className='img-fluid' src='/src/assets/placeholder.png' alt='placeholder img' />
        </div>
        <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center'>
          <h1 className='mb-4'>{characterObj.name}</h1>
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
        <div className='col-2'>{characterObj.height}</div>
        <div className='col-2'>{characterObj.birthYear}</div>
        <div className='col-2'>{characterObj.gender}</div>
        <div className='col-2'>{characterObj.eyeColor}</div>
        <div className='col-2'>{characterObj.mass}</div>
        <div className='col-2'>{characterObj.skinColor}</div>
      </div>
    </div>
  );
};

export default CharacterDetails;
