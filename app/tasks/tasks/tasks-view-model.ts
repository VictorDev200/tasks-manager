import {
  Frame,
  Observable,
  ObservableArray,
  ItemEventData,
} from "@nativescript/core";
import { TaskModel } from "../task.model";
import { TaskService } from "../task.service";

export class TasksViewModel extends Observable {
  private _tasks: TaskModel[];

  constructor() {
    super();
    this.populateTasks();
  }

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
}
