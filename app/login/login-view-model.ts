import { Frame, Observable, TapGestureEventData } from "@nativescript/core";

export class LoginViewModel extends Observable {
  onTapLogin(args: TapGestureEventData): void {
    console.log("Login was pressed");
    Frame.topmost().navigate({
      moduleName: "tasks/tasks-page/tasks-page",
    });
  }

  onTapRegister(args: TapGestureEventData): void {
    console.log("Register was pressed");
  }

  onTapRecoverPassword(args: TapGestureEventData): void {
    console.log("RecoverPassword was pressed");
  }

  constructor() {
    super();
  }
}
