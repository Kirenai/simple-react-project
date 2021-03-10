import axios from 'axios'

import { ITask } from '../components/task';

const URI = process.env.MY_URI || '';

export const findAllTasks = async (token: string) => {
  return await axios.get<ITask[]>(`${URI}/api/task`, { headers: { "Authorization": token }});
}