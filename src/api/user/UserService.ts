import { api } from '../.';

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

export const getUser = async (id: number, token: string) => {
  return await api.get<IUserResponse>(`/user/${id}`, {
    headers: { Authorization: token },
  });
};
