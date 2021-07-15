import { IResponse } from '../api';

export const parseAccountInfo = () => {
  const auth = localStorage.getItem('Auth');
  return JSON.parse(auth!) as IResponse;
};

export const setAccountInfoStorage = (key: string, value: IResponse) => {
  localStorage.setItem(key, JSON.stringify(value));
};
