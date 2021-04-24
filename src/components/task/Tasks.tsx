import axios from 'axios';
import { useEffect, useState } from 'react';

import { ITask } from '.';
import { findAllTasks } from '../../service';
import { IResponse } from '../../service/auth/AuthService';

import { tasks } from '../../__mocks__/data';
import { Task } from './Task';

type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
  const [task, setTask] = useState<ITask[]>([]);

  const loadTasks = async () => {
    // let dataToString: string;
    // let data: IResponse;
    // const auth = localStorage.getItem('Auth');
    // if (auth) {
    //   dataToString = auth;
    //   data = JSON.parse(dataToString);
    //   // const response = await axios.get<ITask[]>('http://localhost:8080/api/task', Headers);
    //   const response = await findAllTasks(data.token);

    //   const formatTask = response.data.map((task) => {
    //     return {
    //       ...task,
    //       createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
    //       updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
    //     };
    //   });
    setTask(tasks);
    // }
  };

  const handleOnClick = (id: string | undefined) => {
    deleteTask(id);
    loadTasks();
  };

  const deleteTask = async (id: string | undefined) => {
    await axios.delete(`http://localhost:8080/api/task/delete/${id}`);
  };

  useEffect(() => {
    loadTasks();
    // setTask(tasks);
    return () => {};
  }, []);

  return (
    <div className="bg-gray-700 h-auto">
      <div className='container mx-auto'>
        <div className='px-12 py-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {task.map((it) => {
              return (
                <Task
                  key={it.id}
                  id={it.id}
                  title={it.title}
                  author={it.author}
                  description={it.description}
                  handleOnClick={handleOnClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
