import { useCallback, useEffect, useState } from 'react';
import { ITask, Task } from '.';
import { Link } from 'react-router-dom';
import { deleteTaskByUserId, getTasksByUserId } from '../../api';
import { parseAccountInfo } from '../../helpers/LocalStorageHelp';

type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
  const [task, setTask] = useState<ITask[]>([]);
  const { id: userId, token } = parseAccountInfo();

  const loadTasks = useCallback(async () => {
    const response = await getTasksByUserId(userId, token);
    const formatTask = response.data.data.map((task) => {
      return {
        ...task,
        createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
        updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
      };
    });
    setTask(formatTask);
  }, [userId, token]);

  const handleOnClick = async (taskId: number) => {
    await deleteTaskByUserId(userId, taskId, token);
    await loadTasks();
  };

  useEffect(() => {
    loadTasks();
    return () => {};
  }, [loadTasks]);

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="container mx-auto">
        <div className="px-12 py-2">
          <div className=" flex flex-row-reverse">
            <Link
              className="bg-blue-600 py-2 px-6 text-white rounded-md mb-2 shadow-lg 
              text-lg hover:bg-blue-500"
              to="/new-task"
            >
              Create a Task
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {task.map((it) => {
              return (
                <Task
                  key={it.id}
                  id={it.id}
                  title={it.title!}
                  author={it.author!}
                  description={it.description!}
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
