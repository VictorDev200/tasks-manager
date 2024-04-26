import { Observable } from "@nativescript/core";
import { TaskModel } from "../task.model";
import { TaskService } from "../task.service";


export class TaskViewModel extends Observable {
  private _task: TaskModel;
  constructor(private _context: { taskId: number }) {
    super();

    this._task = TaskService.getInstance().getTaskById(
      this._context.taskId
    );
  }

  get task(): TaskModel {
    return this._task;
  }
}
