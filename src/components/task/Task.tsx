import React from 'react';
import { Link } from 'react-router-dom';

type TaskProps = {
  id?: string;
  title: string;
  author: string;
  description: string;
  handleOnClick: (id: string | undefined) => void;
};

export const Task: React.FC<TaskProps> = ({
  id,
  title,
  author,
  description,
  handleOnClick,
}) => {
  return (
    <React.Fragment>
      <div className='bg-gray-800 text-gray-100 px-8 py-4 shadow-xl rounded-md'>
        <h3 className='text-2xl text-center'>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 text-gray-200 py-2'>
          <Link
            className='bg-green-700 hover:bg-green-600 rounded p-2 w-full xl:w-40 text-center'
            to={`/update-task/${id}`}>
            Update
          </Link>
          <button
            className='bg-red-500 hover:bg-red-600 rounded p-2 w-full xl:w-40'
            onClick={() => handleOnClick(id)}>
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
