import axios from 'axios';
import { ISignUpState } from '../../components/auth/SignUp';

import { ISignInState } from '../../components/auth/SignIn';

export interface IResponse {
  id: number;
  token: string;
  username: string;
  email: string;
  fullNamee: string;
  roles: [];
}

interface IUser {
  id: number;
  username: string;
  password: string;
  email: string;
  fullNamee: string;
  tasks: [];
  roles: [];
}

const URI = process.env.REACT_APP_MY_URI || '';

console.log(URI);

export const signIn = async (login: ISignInState) => {
  const res = await axios.post<IResponse>(`${URI}/api/auth/login`, login);
  return res;
};

export const signUp = async (register: ISignUpState) => {
  const message = await axios.post<string>(`${URI}/api/auth/register`, register);
  return message;
};

export const getUser = async (id: number, token: string) => {
  return await axios.get<IUser>(`${URI}/api/user/${id}`, {
    headers: { Authorization: token },
  });
};
