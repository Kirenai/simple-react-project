import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../service';

export interface ISignUpState {
  username: string;
  password: string;
  email: string;
  fullName: string;
  roles?: [];
}

const SignUp = () => {
  const [register, setRegister] = useState<ISignUpState>({
    username: '',
    password: '',
    email: '',
    fullName: '',
  });

  useEffect(() => {
    document.title = 'Sign up';
    return () => {
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = await signUp(register);
    console.log(message);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  return (
    <div className='bg-gray-700 h-screen px-2 sm:p-0'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center flex-col'>
          <div className='w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-gray-800 mt-5 py-5 rounded-lg shadow-lg'>
            <h2 className='text-2xl xl:text-4xl text-center my-2 text-white uppercase'>
              Register
            </h2>
            <form className='w-auto p-6 rounded-xl text-white' onSubmit={handleSubmit}>
              <div className='py-2 relative'>
                <span className='block mb-1 text-gray-200'>Nombre de la cuenta</span>
                <input
                  className='bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none'
                  type='text'
                  value={register.username}
                  name='username'
                  id='username'
                  autoFocus={true}
                  onChange={handleChange}
                />
              </div>
              <div className='py-2 relative'>
                <span className='block mb-1 text-gray-200'>Contraseña</span>
                <input
                  className='bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none'
                  type='password'
                  value={register.password}
                  name='password'
                  id='password'
                  onChange={handleChange}
                />
              </div>
              <div className='py-2 relative'>
                <span className='block mb-1 text-gray-200'>Email</span>
                <input
                  className='bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none'
                  type='email'
                  value={register.email}
                  name='email'
                  id='email'
                  onChange={handleChange}
                />
              </div>
              <div className='py-2 relative'>
                <span className='block mb-1 text-gray-200'>Nombre completo</span>
                <input
                  className='bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none'
                  type='text'
                  value={register.fullName}
                  name='fullName'
                  id='fullName'
                  onChange={handleChange}
                />
              </div>
              <div className='py-2'>
                <button
                  className='text-gray-200 bg-blue-500 hover:bg-blue-600 py-2 px-6 w-full 
                    rounded-sm focus:outline-none focus:ring-2 focus:ring-black 
                    focus:ring-transparent shadow-sm'
                  type='submit'>
                  Send
                </button>
              </div>
            </form>
            <div className='text-center'>
              <span className='text-base xl:text-lg'>
                <span className='text-gray-200'>You are registered? </span>
                <Link className='text-blue-500 hover:text-blue-400' to='/login'>
                  Login here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
