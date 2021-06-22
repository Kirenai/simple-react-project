export interface ITask {
  taskData: {
    id?: string;
    title: string;
    author: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}

export interface ITasks {
  data: [
    {
      id: string;
      title: string;
      author: string;
      description: string;
      createdAt?: Date;
      updatedAt?: Date;
    }
  ];
}

