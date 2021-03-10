import axios from "axios";
import { IRegister } from '../components/auth/Register';

import { ISignInState } from '../components/auth/SignIn'

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

const URI = "http://localhost:8080";

export const signIn = async (login: ISignInState) => {
  const res = await axios.post<IResponse>(`${URI}/api/auth/login`, login);
  return res;
}

export const signUp = async (register: IRegister) => {
  const message = await axios.post<string>(`${URI}/api/auth/register`, register);
  return message;
}

export const getUser = async (id: number, token: string) => {
  return await axios.get<IUser>(`${URI}/api/user/${id}`, { headers: { "Authorization": token } });
}

