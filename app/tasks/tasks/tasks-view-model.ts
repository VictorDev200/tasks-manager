import { Frame, ItemEventData, Observable, ObservableArray } from "@nativescript/core";
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
    Frame.topmost().navigate({
      moduleName: "tasks/task/task-page",
      context: { taskId: this._tasks[args.index].id },
    });
  }

  constructor() {
    super();
    this.populateTasks()
  }
}
