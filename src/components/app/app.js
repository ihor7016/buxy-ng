import angular from "angular";
import template from "./app.html";

import { todoFormModule } from "../todo-form/todo-form";
import { todoListModule } from "../todo-list/todo-list";

export class AppController {
  constructor() {
    this.tasks = ["task 1", "task 2"];
  }
}

export const appModule = angular
  .module("appModule", [todoFormModule, todoListModule])
  .component("app", {
    controller: AppController,
    template
  }).name;
