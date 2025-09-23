import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';
import { actionTypes } from '../store';

const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDeleteFavourite = (name, isFavFunction) => {
    isFavFunction(false);
    dispatch({ type: actionTypes.deleteFav, payload: name });
  };
  return (
    <nav className='navbar navbar-light bg-light px-5 mb-4'>
      <div className='container-fluid'>
        <div className='logo'>
          <Link to='/' className='navbar-brand'>
            <img src='/src/assets/logo.png' alt='star wars logo' />
          </Link>
        </div>

        <div className='nav-item dropdown bg-primary text-white p-3 rounded d-flex'>
          <a
            className='nav-link dropdown-toggle'
            href='#'
            id='navbarDropdown'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            data-bs-auto-close='false'
          >
            Favourites &nbsp;
            <span className='bg-light text-dark p-1 rounded'>{store.favourites.length || 0}</span>
            &nbsp;
          </a>

          <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='navbarDropdown'>
            {store.favourites.length > 0 ? (
              store.favourites.map(({ name, isFavFunction }) => {
                return (
                  <li key={name} className='dropdown-item'>
                    {name}
                    &nbsp;&nbsp;
                    <i onClick={() => handleDeleteFavourite(name, isFavFunction)} className='fa-solid fa-trash'></i>
                  </li>
                );
              })
            ) : (
              <li className='dropdown-item text-center fst-italic'>( empty )</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
