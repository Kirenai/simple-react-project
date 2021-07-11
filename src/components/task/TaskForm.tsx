import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { ITask, ITaskParms } from '.';
import { getTask, createTask, updateTask } from '../../api/.';
import { parseAccountInfo } from '../../helpers/LocalStorageHelp';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = () => {
  const [task, setTask] = useState<ITask>({
    id: undefined,
    title: '',
    author: '',
    description: '',
  });
  const history = useHistory();
  const { id } = useParams<ITaskParms>();
  const { id: userId, token } = parseAccountInfo();

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (id) await updateTask(userId, task, token);
    else await createTask(userId, task, token);

    history.push('/tasks');
  };

  const handleOnChange = (e: InputChange) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const setTaskToState = useCallback(async () => {
    const response = await getTask(parseInt(id), token);
    const { id: taskId, title, author, description } = response.data.taskData;
    setTask({
      id: taskId,
      title,
      author,
      description,
    });
  }, [id, token]);

  useEffect(() => {
    if (id) setTaskToState();
    return () => {};
  }, [setTaskToState, id]);

  const { title, author, description } = task;

  return (
    <div className="bg-gray-700 min-h-screen px-2 sm:p-0">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          <div className="w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-gray-800 mt-5 py-5 rounded-lg shadow-lg">
            <h2 className="text-2xl xl:text-4xl text-center my-2 text-white uppercase">
              {id ? 'Update a Task' : 'Create a new Task'}
            </h2>
            <form
              className="w-auto p-6 rounded-xl text-white"
              onSubmit={handleOnSubmit}
            >
              <div className="py-2">
                <label className="block mb-1 text-gray-200">
                  Title
                  <input
                    className="bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleOnChange}
                  />
                </label>
              </div>
              <div className="py-2">
                <label className="w-full block text-xl text-gray-100">
                  Author
                  <input
                    className="bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none"
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleOnChange}
                  />
                </label>
              </div>
              <div className="py-2">
                <label className="w-full block text-xl text-gray-100">
                  Description
                  <textarea
                    className="bg-inputs text-gray-100 text-lg py-1 px-1 w-full focus:outline-none"
                    name="description"
                    value={description}
                    onChange={handleOnChange}
                    rows={4}
                  ></textarea>
                </label>
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
                <span className="text-gray-200">Go back </span>
                <Link className="text-blue-500 hover:text-blue-400" to="/tasks">
                  Here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
