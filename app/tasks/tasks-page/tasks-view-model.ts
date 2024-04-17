import { ItemEventData, Observable, ObservableArray } from "@nativescript/core";
import { TaskModel } from "../models/task.model";
import { TaskService } from "../task.service";

export class TasksViewModel extends Observable {
  private _tasks: TaskModel[];

  get tasks(): ObservableArray<TaskModel> {
    return new ObservableArray(this._tasks);
  }

  populateTasks(): void {
    this._tasks = TaskService.getInstance().getTasks();
  }

  onTaskTap(args: ItemEventData): void {
    console.log(args);
  }

  constructor() {
    super();
    this.populateTasks()
  }
}
