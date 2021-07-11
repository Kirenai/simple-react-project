import { IResponse } from '../api';

export const parseAccountInfo = () => {
  const auth = localStorage.getItem('Auth');
  return JSON.parse(auth!) as IResponse;
};
