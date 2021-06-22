import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IAppRoute } from '../../route/AppRoute';
import { signIn } from '../../service';

type ReactState = React.Dispatch<React.SetStateAction<IAppRoute>>;

export interface ISignInState {
  username: string;
  password: string;
}

interface SignInProps {
  setLoginAuth: ReactState;
}

const SignIn: React.FC<SignInProps> = ({ setLoginAuth: setAuthLogin }) => {
  const history = useHistory();

  const [login, setLogin] = useState<ISignInState>({
    username: '',
    password: '',
  });

  useEffect(() => {
    document.title = 'Login';
    return () => {};
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const loginResponse = await signIn(login);
      localStorage.setItem('Auth', JSON.stringify(loginResponse.data));
      setAuthLogin({ isLogged: true });
      history.push('/home');
    } catch (error) {
      history.push('/login');
    }
  };

  return (
    <div className="bg-gray-700 h-screen px-2 sm:p-0">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          <div className="w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-gray-800 mt-5 py-5 rounded-lg shadow-lg">
            <h2 className="text-2xl xl:text-4xl text-center my-2 text-white uppercase">
              Iniciar Sesión
            </h2>
            <form
              className="w-auto p-6 rounded-xl text-white"
              onSubmit={handleSubmit}
            >
              {/*<div className="py-2 relative">
                <TextField
                  id="username2"
                  name="username2"
                  label="Nombre de la cuenta"
                  onChange={handleChange}
                  variant="filled"
                  color="primary"
                  className="w-full text-white"
                />
              </div>*/}
              <div className="py-2 relative">
                <label className="block mb-1 text-gray-200">
                  Nombre de la cuenta
                  <input
                    className="bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none"
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={login.username}
                    autoFocus={true}
                  />
                </label>
                {/* <i className='fas fa-user absolute top-11 left-2 text-gray-400'></i> */}
              </div>
              <div className="py-2 relative">
                <label className="block mb-1 text-gray-200">
                  Contraseña
                  <input
                    className="bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={login.password}
                  />
                </label>
                {/* <i className='fas fa-key absolute top-5 left-2 text-gray-400'></i> */}
              </div>
              <div className="py-2">
                <button
                  className="text-gray-200 bg-blue-500 hover:bg-blue-600 py-2 px-6 w-full 
                    rounded-sm focus:outline-none focus:ring-2 focus:ring-black 
                    focus:ring-transparent shadow-sm"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-base xl:text-lg">
                <span className="text-gray-200">You are not registed? </span>
                <Link
                  className="text-blue-500 hover:text-blue-400"
                  to="/register"
                >
                  sign up here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
