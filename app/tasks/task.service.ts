import { TaskModel } from "./models/task.model";

export class TaskService {
  private tasks: TaskModel[] = [
    {
      id: 1,
      clientName: 'Colombiana',
      description: 'Requiere revisión de velocidad de producción de bebidas gaseosas'
    },
    {
      id: 2,
      clientName: 'Claro',
      description: 'Requiere revisión de velocidad de producción de tarjetas '
    },
    {
      id: 2,
      clientName: 'Pepe Ganga',
      description: 'Requiere revisión de velocidad de producción de juguetes'
    },
  ];

  static getInstance(): TaskService {
    return TaskService._instance;
  }

  private static _instance: TaskService = new TaskService();

  getTasks(): TaskModel[] {
    return this.tasks;
  }

  getTaskById(id: number): TaskModel | undefined {
    return this.tasks.find((task) => task.id === id) || undefined;
  }
}
