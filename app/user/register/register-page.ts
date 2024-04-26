import { NavigatedData, Page } from "@nativescript/core";
import { RegisterViewModel } from "./register-view-model";


export function navigatingTo(args: NavigatedData): void {
  if (args.isBackNavigation) {
    return;
  }

  const page = <Page>args.object;
  page.bindingContext = new RegisterViewModel();
}
