import { ISignUpState } from '../../components/auth/SignUp';
import { ISignInState } from '../../components/auth/SignIn';
import { api } from '../.';

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

export const signIn = async (login: ISignInState) => {
  return await api.post<IResponse>('/auth/login', login);
};

export const signUp = async (register: ISignUpState) => {
  return await api.post<string>('/auth/register', register);
};
