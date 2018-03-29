import angular from "angular";
import template from "./app.html";
import { drawerModule } from "../drawer/drawer";
import "angular-animate";
import "angular-aria";
import "angular-material";

export class AppController {
  constructor() {
    this.tasks = [];
  }

  handleTaskAdd(task) {
    this.tasks.push(task);
  }
}

export const appModule = angular
  .module("appModule", [drawerModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
