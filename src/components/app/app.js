import angular from "angular";
import template from "./app.html";
import { drawerModule } from "../drawer/drawer";
import "angular-animate";
import "angular-aria";
import "angular-material";
import { toolbarModule } from "../toolbar/toolbar";

export class AppController {
  constructor() {
    this.tasks = [];
  }

  handleTaskAdd(task) {
    this.tasks.push(task);
  }
  openDrawer() {}
}

export const appModule = angular
  .module("appModule", [drawerModule, toolbarModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
