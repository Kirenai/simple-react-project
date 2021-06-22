import { useEffect, useState } from 'react';
import axios from 'axios';

import { getTasksByUserId } from '../../service';
import { IResponse } from '../../service/auth/AuthService';
import { Task } from './Task';

type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
  const [task, setTask] = useState<any>([]);

  const loadTasks = async () => {
    let dataToString: string;
    let dataParse: IResponse;
    const auth = localStorage.getItem('Auth');
    if (auth) {
      dataToString = auth;
      dataParse = JSON.parse(dataToString);
      const response = await getTasksByUserId(dataParse.id, dataParse.token);
      const formatTask = response.data.data.map((task) => {
        return {
          ...task,
          createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
          updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
        };
      });
      setTask(formatTask);
    }
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
    <div className="bg-gray-700 min-h-screen">
      <div className="container mx-auto">
        <div className="px-12 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {task.map((it: any) => {
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
