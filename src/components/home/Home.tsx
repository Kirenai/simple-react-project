import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
    return () => {};
  }, []);

  return (
    <div className='bg-gray-700 h-screen px-2 sm:p-0'>
      <div className='container mx-auto'>
        <h1 className='text-white text-xl'>Home</h1>
      </div>
    </div>
  );
};

export default Home;
