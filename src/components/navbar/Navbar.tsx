import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IAppRoute } from '../../route/AppRoute';

import { show } from '../../helpers/ShowButtons';
import { Box } from '@material-ui/core';

interface NavbarProps {
  isLogged: boolean;
  setAuthLogin: React.Dispatch<React.SetStateAction<IAppRoute>>;
}

const Navbar: React.FC<NavbarProps> = ({ isLogged, setAuthLogin }) => {
  const history = useHistory();
  const home = isLogged ? '/home' : '/';

  useEffect(() => {
    return () => {};
  }, []);

  const handleClick = () => {
    console.log('click logout');
    setAuthLogin({ isLogged: false });
    localStorage.removeItem('Auth');
    history.push('/login');
  };

  return (
    <div className="bg-gray-900 text-white w-full h-full md:h-16">
      <div className="container mx-auto h-full">
        <nav className="lg:px-10 flex justify-around flex-wrap md:flex-nowrap h-full items-center">
          <Box
            component="span"
            className="h-16 flex items-center md:inline-block md:ml-2 relative"
          >
            <Link
              className="h-auto text-xl font-semibold hover:text-gray-300
                text-center hover:border-b-2 hover:border-gray-300 transform duration-300 
                ease-in-out absolute top-4"
              to={home}
            >
              Home
            </Link>
          </Box>
          <div className="md:hidden w-10 h-10">
            <button
              className="w-full h-full border border-gray-500 rounded-md 
              hover:border-gray-200 focus:outline-none text-gray-300 
              hover:text-white"
              onClick={show}
            >
              <i className="fas fa-align-justify"></i>
            </button>
          </div>
          {isLogged ? (
            <ul
              className="md:flex md:h-full bg-gray-900 w-full justify-end hidden"
              id="nav"
            >
              <li className="h-full flex justify-center items-center pt-2 md:pt-0 md:mx-2">
                <Link
                  to="/tasks"
                  className="px-4 py-2 rounded-md border border-blue-300 hover:bg-blue-200
                  hover:text-black border-b-2 transition duration-500 ease-in-out"
                >
                  Tareas
                </Link>
              </li>
              <li className="h-full flex justify-center items-center pt-2 md:py-0 md:mx-2">
                <Link
                  to="/home"
                  className="px-4 py-2 rounded-md border border-blue-300 hover:bg-blue-200
                  hover:text-black border-b-2 transition duration-500 ease-in-out"
                >
                  Casa
                </Link>
              </li>
              <li className="h-full flex justify-center items-center py-2 md:py-0 md:mx-2">
                <button
                  onClick={handleClick}
                  className="px-4 py-2 rounded-md border border-blue-300 hover:bg-blue-200
                  hover:text-black border-b-2 transition duration-500 ease-in-out"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          ) : (
            <ul
              className="md:flex md:h-full bg-gray-900 w-full justify-end hidden"
              id="nav"
            >
              <li className="h-full flex justify-center items-center pt-2 md:pt-0 md:mx-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md border border-blue-300 hover:bg-blue-200
                  hover:text-black border-b-2 transition duration-500 ease-in-out"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li className="h-full flex justify-center items-center py-2 md:py-0 md:mx-2">
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md border border-blue-300 hover:bg-blue-200
                  hover:text-black border-b-2 transition duration-500 ease-in-out"
                >
                  Registrate
                </Link>
              </li>
            </ul>
          )}

          {/* <li className='h-full'>
              <Link to='/update-task' className='flex h-full items-center p-4'>
                Update Task
              </Link>
            </li>
            <li className='h-full'>
              <Link to='delete-task' className='flex h-full items-center p-4'>
                Delete Task
              </Link>
            </li> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
