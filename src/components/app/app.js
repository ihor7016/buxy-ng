import angular from "angular";
import template from "./app.html";

import { todoFormModule } from "../todo-form/todo-form";
import { todoListModule } from "../todo-list/todo-list";

export class AppController {
  constructor() {
    this.tasks = [];
  }

  handleTaskAdd(task) {
    this.tasks.push(task);
  }
}

export const appModule = angular
  .module("appModule", [todoFormModule, todoListModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
