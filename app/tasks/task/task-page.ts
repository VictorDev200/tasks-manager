import { EventData, Page } from "@nativescript/core";
import { TaskViewModel } from "./task-view-model";

export function navigatingTo(args: EventData): void {
  const page = <Page>args.object;
  page.bindingContext = new TaskViewModel(page.navigationContext);
}
