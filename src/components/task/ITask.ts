export interface ITask {
  id?: string;
  title: string;
  description: string;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
}