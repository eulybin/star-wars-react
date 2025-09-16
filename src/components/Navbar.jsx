import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light p-2 mb-4'>
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
          >
            Favourites &nbsp;
            <span className='bg-secondary p-1 rounded'>0</span>
            &nbsp;
          </a>

          <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <li>
              <a className='dropdown-item' href='#'>
                Action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
            </li>
            <li>
              <hr className='dropdown-divider' />
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
