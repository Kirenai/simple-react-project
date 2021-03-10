import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../service/';

export interface IRegister {
  username: string;
  password: string;
  email: string;
  fullName: string;
  roles?: [];
}

const Register = () => {
  const [register, setRegister] = useState<IRegister>({
    username: '',
    password: '',
    email: '',
    fullName: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = await signUp(register);
    console.log(message);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  return (
    <div className='bg-gray-700 h-screen'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-4xl text-center my-2'>Register</h1>
          <form className='w-auto p-8 rounded-xl' onSubmit={handleSubmit}>
            <div className='py-2 relative'>
              <label htmlFor='username'>
                <i className='fas fa-user absolute top-5 left-2 text-gray-400'></i>
              </label>
              <input
                className='bg-inputs text-gray-400 text-lg py-1 pl-7 rounded-xl focus:outline-none'
                type='text'
                value={register.username}
                name='username'
                id='username'
                placeholder='Username'
                autoFocus={true}
                onChange={handleChange}
              />
            </div>
            <div className='py-2 relative'>
              <label htmlFor='password'>
                <i className='fas fa-key absolute top-5 left-2 text-gray-400'></i>
              </label>
              <input
                className='bg-inputs text-gray-400 text-lg py-1 pl-7 rounded-xl focus:outline-none'
                type='password'
                value={register.password}
                name='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>
            <div className='py-2 relative'>
              <label htmlFor='email'>
                <i className='fas fa-envelope-open-text absolute top-5 left-2 text-gray-400'></i>
              </label>
              <input
                className='bg-inputs text-gray-400 text-lg py-1 pl-7 rounded-xl focus:outline-none'
                type='email'
                value={register.email}
                name='email'
                id='email'
                placeholder='Email'
                onChange={handleChange}
              />
            </div>
            <div className='py-2 relative'>
              <label htmlFor='email'>
                <i className='fas fa-file-signature absolute top-5 left-2 text-gray-400'></i>
              </label>
              <input
                className='bg-inputs text-gray-400 text-lg py-1 pl-7 rounded-xl focus:outline-none'
                type='text'
                value={register.fullName}
                name='fullName'
                id='fullName'
                placeholder='Full Name'
                onChange={handleChange}
              />
            </div>
            <div className='py-2'>
              <button
                className='text-gray-100 bg-pink-600 hover:bg-pink-500 py-2 px-6 w-full rounded-lg'
                type='submit'>
                Send
              </button>
            </div>
          </form>
          <div className='text-center'>
            <span>
              You are registered?{' '}
              <Link className='text-blue-500 hover:text-blue-400' to='/login'>
                Login here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
