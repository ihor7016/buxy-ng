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
    this.drawerOpened = { value: false };
  }

  handleTaskAdd(task) {
    this.tasks.push(task);
  }

  openDrawer() {
    this.drawerOpened.value = !this.drawerOpened.value;
  }
}

export const appModule = angular
  .module("appModule", [drawerModule, toolbarModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
