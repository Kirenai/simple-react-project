import axios from 'axios';
import { ISignUpState } from '../../components/auth/SignUp';
import { ISignInState } from '../../components/auth/SignIn';

export interface IResponse {
  id: number;
  token: string;
  username: string;
  email: string;
  fullNamee: string;
  roles: [
    {
      id: number;
      name: string;
    }
  ];
}

interface IUserResponse {
  personData: {
    id: number;
    username: string;
    email: string;
    fullNamee: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: [];
    roles: [];
    message?: string;
  };
}

const URI = process.env.REACT_APP_MY_URI || '';

export const signIn = async (login: ISignInState) => {
  return await axios.post<IResponse>(`${URI}/auth/login`, login);
};

export const signUp = async (register: ISignUpState) => {
  return await axios.post<string>(`${URI}/api/auth/register`, register);
};

export const getUser = async (id: number, token: string) => {
  return await axios.get<IUserResponse>(`${URI}/api/user/${id}`, {
    headers: { Authorization: token },
  });
};
