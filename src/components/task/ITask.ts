export interface ITask {
  id?: number;
  title?: string;
  author?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITaskResponse {
  taskData: {
    id?: number;
    title: string;
    author: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}

export interface ITasksResponse {
  data: [
    {
      id?: number;
      title?: string;
      author?: string;
      description?: string;
      createdAt?: Date;
      updatedAt?: Date;
    }
  ];
}
