import axios from 'axios';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ITask, ITaskParms } from '.';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = () => {
  const [task, setTask] = useState<ITask>({
    title: '',
    author: '',
    description: '',
  });
  const history = useHistory();
  const { id } = useParams<ITaskParms>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (id) await axios.put(`http://localhost:8080/api/task/update/${id}`, task);
    else await axios.post('http://localhost:8080/api/task/add', task);

    history.push('/tasks');
  };

  const handleChange = (e: InputChange) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const getTask = async (id: string) => {
    const response = await axios.get<ITask>(`http://localhost:8080/api/task/${id}`);
    const { title, author, description } = response.data;
    setTask({ title, author, description });
  };

  useEffect(() => {
    if (id) getTask(id);
    return () => {
      setTask({
        title: '',
        author: '',
        description: '',
      });
    };
  }, [id]);

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-start h-full p-4'>
        <form className='p-8 rounded-xl bg-gray-600 shadow-xl' onSubmit={handleSubmit}>
          <div className='py-2'>
            <label className='w-full block text-xl text-gray-100' htmlFor='title'>
              Title
            </label>
            <input
              className='w-full h-8 px-2 text-gray-800 rounded-lg text-lg border 
                border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 
                focus:border-transparent shadow-md
              '
              type='text'
              name='title'
              id='title'
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className='py-2'>
            <label className='w-full block text-xl text-gray-100' htmlFor='author'>
              Author
            </label>
            <input
              className='w-full h-8 px-2 text-gray-800 rounded-lg text-lg border 
                border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 
                focus:border-transparent shadow-md
              '
              type='text'
              name='author'
              id='author'
              value={task.author}
              onChange={handleChange}
            />
          </div>
          <div className='py-2'>
            <label className='w-full block text-xl text-gray-100' htmlFor='description'>
              Description
            </label>
            <textarea
              className='w-full text-gray-800 px-1 rounded-md'
              name='description'
              id='description'
              value={task.description}
              onChange={handleChange}
              rows={4}></textarea>
          </div>
          <div className='py-2 text-center'>
            <button
              className='bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 
                focus:ring-red-500 focus:ring-opacity-50 px-4 py-2 w-full rounded-lg shadow-lg 
              '
              type='submit'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
