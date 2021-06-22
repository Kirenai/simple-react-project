import axios from 'axios';

import { ITask, ITasks } from '../../components/task';

const URI = process.env.REACT_APP_MY_URI || '';

export const getTask = async (token: string) => {
  return await axios.get<ITask>(`${URI}/task`, {
    headers: {
      Authorization: token,
    },
  });
};

export const getTasks = async (token: string) => {
  return await axios.get<ITasks[]>(`${URI}/task`, {
    headers: {
      Authorization: token,
    },
  });
};

export const getTasksByUserId = async (id: number, token: string) => {
  return await axios.get<ITasks>(`${URI}/task/user/${id}`, {
    headers: { Authorization: token },
  });
};

