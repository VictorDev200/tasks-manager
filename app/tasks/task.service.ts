import { TaskModel } from "./task.model";

export class TaskService {
  private tasks: TaskModel[] = [
    {
      id: 1,
      description: "Musical",
    },
    {
      id: 2,
      description: "Beetlejuice",
    },
    {
      id: 3,
      description: "Anastasia",
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
