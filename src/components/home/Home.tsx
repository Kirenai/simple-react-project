import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = 'Home';
    return () => {};
  }, []);

  return (
    <div className="bg-gray-700 h-screen px-2 sm:p-0">
      <div className="container mx-auto">
        <h1 className="text-base">hola</h1>
      </div>
    </div>
  );
};
