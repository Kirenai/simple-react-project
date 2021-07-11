import { ITask, ITaskResponse, ITasksResponse } from '../../components/task';
import { api } from '../.';

export const getTasks = async (token: string) => {
  console.log('[!] loading all tasks');
  return await api.get<ITasksResponse>('/task', {
    headers: {
      Authorization: token,
    },
  });
};

export const getTask = async (id: number, token: string) => {
  console.log('[!] loading a tasks');
  return await api.get<ITaskResponse>(`/task/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const getTasksByUserId = async (id: number, token: string) => {
  console.log('[!] loading all tasks for a user');
  return await api.get<ITasksResponse>(`/task/user/${id}`, {
    headers: { Authorization: token },
  });
};

export const createTask = async (
  userId: number,
  task: ITask,
  token: string
) => {
  console.log('[!] creating a task');
  await api.post<ITaskResponse>(`/task/${userId}`, task, {
    headers: { Authorization: token },
  });
};

export const updateTask = async (
  userId: number,
  task: ITask,
  token: string
) => {
  console.log('[!] updating a task');
  await api.put<ITaskResponse>(`/task/${userId}/edit`, task, {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteTask = async (
  userId: number,
  taskId: number,
  token: string
) => {
  await api.delete<ITaskResponse>(`/task/${userId}/${taskId}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteTaskByUserId = async (
  userId: number,
  taskId: number,
  token: string
) => {
  console.log('[!] deleting a task');
  await api.delete<ITaskResponse>(`/task/${userId}/${taskId}`, {
    headers: { Authorization: token },
  });
};
