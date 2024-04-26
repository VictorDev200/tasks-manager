import { Frame, Observable, TapGestureEventData } from "@nativescript/core";

export class LoginViewModel extends Observable {
  onTapLogin(args: TapGestureEventData): void {
    Frame.topmost().navigate({
      moduleName: "tasks/tasks/tasks-page",
    });
  }

  onTapRegister(args: TapGestureEventData): void {
    Frame.topmost().navigate({
      moduleName: "user/register/register-page",
    });
  }

  onTapRecoverPassword(args: TapGestureEventData): void {
    console.log("RecoverPassword was pressed");
  }

  constructor() {
    super();
  }
}
