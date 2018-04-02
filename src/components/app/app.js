import angular from "angular";
import template from "./app.html";
import { drawerModule } from "../drawer/drawer";
import { toolbarModule } from "../toolbar/toolbar";

export class AppController {
  constructor() {
    this.tasks = [];
    this.drawerOpened = false;
  }

  handleTaskAdd(task) {
    this.tasks.push(task);
  }

  openDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }
}

export const appModule = angular
  .module("appModule", [drawerModule, toolbarModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
